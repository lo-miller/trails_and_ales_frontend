<template>
<div>
  <div class="breweries-show">
    <h1>{{ message }}</h1>
    <br>
      <div class="map">
        <gmap-map ref="mapRef"
        :center="map_center"
        :zoom="zoom"
        style="width:100%;  height: 400px;"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position= "m"
          @click="center=m"
        > 
        </gmap-marker>
      </gmap-map>
      </div>
    </div>
  </div>
</template> 

<style>
#map {
  width: 100%;
  height: 400px;
}
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
    breweriesShow: function () {
      var params;
      console.log("fetching one brewery");
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

      // "https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJrTLr-GyuEmsRBfy61i59si0&key=YOUR_API_KEY"
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


