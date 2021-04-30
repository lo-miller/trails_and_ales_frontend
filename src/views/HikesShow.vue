<template>
<div class="hikes-show">
    <div class="wrapper style1">
      <div class="inner">

        <!-- Feature 1 -->
        <section class="container box feature1">
          <div class="row">
            <div class="col-12">
              <header class="first major">
                <h2><a v-bind:href="hike.url">{{hike.name || ""}}</a></h2>
                <!-- <p>Description: {{hike.description ||" "}}</p>
                <p>Difficulty: {{hike.difficulty ||" "}}</p> -->
                <p>Elevation Gain: {{hike.elevation_gain ||" "}} feet</p> 
                <p>Highest Point: {{hike.highest_point ||" "}}</p>
                <p>Length: {{hike.length ||" "}} miles</p>
                <p>Features: {{hike.features}}</p>
                <p>Required Pass: {{hike.required_pass}}</p>
                <p><a v-bind:href="hike.url">More information</a></p>
                <button v-on:click="searchBreweries" style="margin-bottom: 2em">Search for nearby breweries</button>
                <br>
              </header>
              <div class="map">
                <gmap-map ref="mapRef"
                  :center="map_center"
                  :zoom="zoom"
                  style="width:100%;  height: 800px;">
                  <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position= "m"
                    @click="center=m"
                  > 
                  <!-- <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m"
                    @click="center=m"
                  > -->
                  </gmap-marker>
                </gmap-map>
              </div>
            </div>
          </div>
        </section>
        <div class="container">
          <div class="row">
            <div class="col-12">
              <!-- Article list -->
              <section class="box article-list" style="width=100%">
                <h2 class="second icon solid fa-beer">Nearby Breweries</h2>
                <div class="row">
                  <article class="col-12-medium" v-for="brewery in breweries">
                    <h4>{{brewery.name}}</h4> 
                    <p>{{brewery.vicinity}}</p> 
                    <p>Rating: {{brewery.rating}}</p> 
                    <p>Open now? {{brewery.opening_hours.open_now}}</p>
                  </article>	
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
      currentPlace: null,
      zoom: 12,
      hike: {},
      breweries: [],
      brewery: {},
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
      });
    },
    searchBreweries() {
      var params = {
        location: `${this.hike.latitude},${this.hike.longitude}`,
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
              };
              this.markers.push(marker);
            }
          }
          console.log(this.breweries[0]["place_id"]);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>

