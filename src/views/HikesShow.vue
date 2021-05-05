<template>
<div class="hikes-show">
    <div class="wrapper style1">
      <div class="inner">
        <section class="container">
          <header class="first major">
            <h2 style="text-align:center"><a v-bind:href="hike.url">{{hike.name || ""}}</a></h2>
          </header>
          <div class="row">
          <div class="col-6 col-12-medium" style="padding: 10px 0 0 35px">  
            <p style="margin:10px"> <strong>Description:</strong> {{hike.description ||" "}}</p>
            <p style="margin:10px"><strong>Difficulty: </strong> {{hike.difficulty ||" "}}</p> 
            <p style="margin:10px"><strong>Elevation Gain:</strong> {{hike.elevation_gain ||" "}} feet</p> 
            <p style="margin:10px"><strong>Highest Point:</strong> {{hike.highest_point ||" "}} feet</p>
            <p style="margin:10px"><strong>Length:</strong> {{hike.length ||" "}} miles</p>
            <p style="margin:10px"><strong>Features:</strong> {{hike.features}}</p>
            <p style="margin:10px"><strong>Required Pass:</strong> {{hike.required_pass}}</p>
            <p style="margin:10px">Occupied and traditional territory of the
              <span v-for="territory in territories">
              {{territory.properties.Name}},</span></p>
            <p style="margin:10px"><strong><a v-bind:href="hike.url">More information</a></strong></p>
          </div>
          <div class="col-6 col-12-medium" style="padding: 10px 0 0 35px">
                  <article class="box excerpt">
                    <a href="#" class="image left"><img v-bind:src="hike.image" alt="images/logo3.png" /></a>
                  </article>
          </div>
          </div>
        </section>
        <div class="container">
          <div class="row">
            <div class="map">
              <gmap-map ref="mapRef"
                  :center="map_center"
                  :zoom="zoom"
                  map-type-id="terrain"
                  style="width:100%;  height: 800px;">
                  <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position= "m"
                    @click="toggleInfo(m,index)"
                  > 
                  </gmap-marker>
                  <!-- <gmap-marker
                    :key="i"
                    v-for="(m, i) in brewery_markers"
                    :position="m"
                    @click="toggleInfoB(m,i)"
                  >
                  </gmap-marker> -->

                  <gmap-info-window
                    :options="infoOptions"
                    :position="infoPosition"
                    :opened="infoOpened"
                    @closeclick="infoOpened=false">
                      {{infoContent}}
                    </gmap-info-window>
              </gmap-map>
            </div>
            <div class="col-12">
              <!-- Article list -->
              <section ref="breweries" id="breweries" class="box article-list" style="width=100%;margin-left:auto;margin-right:auto">
                <h2 class="second icon solid fa-beer" style="margin-left:1em;margin-top:1em;margin-bottom:0.5em">Nearby Breweries</h2>
              <div class="row">
                <div class="col-12" style="padding-top:10px">
                  <button v-on:click="searchBreweries" style="margin: 1em;display:inline-block">Search for nearby breweries</button>
                  <div class="search" style="width: 200px;margin:1em">
                    <v-select v-model="selected" :options= "radiusOptions" :reduce="radius => radius.code" label="radius" placeholder="radius" />        
                  </div>
                </div>
              </div>
                <div class="row" style="padding-left:35px" v-if="breweries.length !== 0">
                  <article class="col-12-medium" v-for="brewery in breweries">
                    <h4>{{brewery.name}}</h4> 
                    <p>{{brewery.vicinity}}</p> 
                    <p>Rating: {{brewery.rating}}</p> 
                    <p>Open now? <span v-if="brewery.opening_hours.open_now == true">Yes</span><span v-else>No</span></p>
                    <p>Distance to trailhead: {{brewery.distance}} km </p>
                    <button v-on:click="saveThisAdventure(brewery)">Save this adventure</button>
                  </article>	
                </div>
                <div class="row" v-else style="margin-left:auto;margin-right:auto">
                  {{emptyMessage}}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  

</template> 

<style>
/* #map {
  width: 100%;
  height: 400px;
} */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>

<script>
import axios from "axios";
export default {
  name: "App",
  data: function () {
    return {
      message: "Hike Details!",
      map_center: { lat: 41.9211, lng: -87.7005 },
      hike_marker: {},
      markers: [],
      brewery_markers: [],
      currentPlace: null,
      zoom: 10,
      hike: {},
      breweries: [],
      brewery: {},
      territories: [],
      errors: [],
      radiusOptions: [
        { radius: "5km", code: "5000" },
        { radius: "10km", code: "10000" },
        { radius: "20km", code: "20000" },
        { radius: "50km", code: "50000" },
        { radius: "100km", code: "100000" },
        { radius: "200km", code: "200000" },
      ],
      selected: "",
      emptyMessage:
        "No breweries found. Please try a larger radius or a different hike",
      infoPosition: null,
      infoOpened: false,
      infoContent: null,
      infoCurrentKey: null,
      infoLink: null,
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  mounted: function () {
    this.hikesShow();
  },
  created: function () {},
  methods: {
    hikesShow: function () {
      console.log("fetching one hike");
      console.log(this.$route.params.id);
      axios.get(`/api/hikes/${this.$route.params.id}`).then((response) => {
        console.log(response.data);
        this.hike = response.data;
        console.log(this.hike.name);
        this.hike_marker = {
          name: this.hike.name,
          lat: this.hike.latitude,
          lng: this.hike.longitude,
        };
        console.log(this.hike_marker);
        this.markers.push(this.hike_marker);
        console.log(this.markers);
        this.$refs.mapRef.$mapPromise.then((map) => {
          map.panTo({
            lat: this.hike.latitude,
            lng: this.hike.longitude,
          });
        });
        var nativeLand = this.nativeLand();
      });
    },
    nativeLand() {
      var params = {
        location: `${this.hike.latitude},${this.hike.longitude}`,
      };
      console.log(params);
      axios
        .get("/api/territories", { params })
        .then((response) => {
          console.log(response.data);
          this.territories = response.data;
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    searchBreweries() {
      var params = {
        location: `${this.hike.latitude},${this.hike.longitude}`,
        radius: this.selected || 5000,
      };
      axios
        .get("/api/search_results", { params })
        .then((response) => {
          console.log(params);
          console.log(response.data.results);
          console.log(response.data.results[0]);
          this.breweries = response.data.results;
          console.log("first brewery");
          console.log(this.breweries[0]["name"]);
          console.log(this.breweries[0]["geometry"]["location"]["lat"]);
          for (var i = 0; i < this.breweries.length; i++) {
            if (this.breweries[i].latitude !== null) {
              const marker = {
                lat: this.breweries[i]["geometry"]["location"]["lat"],
                lng: this.breweries[i]["geometry"]["location"]["lng"],
                name: this.breweries[i]["name"],
              };
              this.markers.push(marker);
            }
            var distance = this.getDistance(this.breweries[i]);
            console.log(distance);
            this.breweries[i]["distance"] = distance.toFixed(2);
            console.log(this.breweries[i]);
          }
          console.log(this.breweries[3]);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
    degreesToRadians: function (degrees) {
      return (degrees * Math.PI) / 180;
    },
    getDistance: function (brewery) {
      console.log(brewery);
      var lat1 = (this.hike.latitude * Math.PI) / 180;
      var lat2 = (brewery["geometry"]["location"]["lat"] * Math.PI) / 180;
      var lng1 = (this.hike.longitude * Math.PI) / 180;
      var lng2 = (brewery["geometry"]["location"]["lng"] * Math.PI) / 180;
      console.log(lat1);
      console.log(lng2);
      var latDiff = lat2 - lat1;
      var lngDiff = lng2 - lng1;
      var a =
        Math.sin(latDiff / 2) * Math.sin(latDiff / 2) +
        Math.cos(lat1) *
          Math.cos(lat2) *
          Math.sin(lngDiff / 2) *
          Math.sin(lngDiff / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var dist = (c * 6371000) / 1000;

      // var dist = Math.acos(
      //   Math.sin(lat1) * Math.sin(lat2) +
      //     Math.cos(lat1) * Math.cos(lat2) * Math.cos(lngDiff)
      // );
      console.log(dist);

      return dist;
    },
    saveThisAdventure: function (brewery) {
      var params = {
        hike_id: this.hike.id,
        brewery_name: brewery.name,
      };
      axios
        .post("/api/saved_hikes", params)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/saved_hikes");
          alert("You have successfully saved this adventure");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    getPosition: function (marker) {
      return {
        lat: parseFloat(marker.lat),
        lng: parseFloat(marker.lng),
      };
    },
    toggleInfo: function (marker, index) {
      this.infoPosition = this.getPosition(marker);
      this.infoContent = marker.name;
      console.log(this.infoPosition);
      if (this.infoCurrentKey == index) {
        this.infoOpened = !this.infoOpened;
      } else {
        this.infoOpened = true;
        this.infoCurrentKey = index;
      }
    },
  },
};
</script>

