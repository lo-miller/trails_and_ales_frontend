<template>
  <div class="hikes-index">
    <h1>{{ message }}</h1>
    <br>
    <button v-on:click="hikesIndex">Reload Hikes</button>
    <br>
    <button v-on:click="displayHikes">Display Hikes</button>
    <br>
    <div class="map">
      <gmap-map ref="mapRef"
      :center="center"
      :zoom="zoom"
      style="width:100%;  height: 400px;"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m"
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
    <div class="list">
      <div v-for="hike in hikes">
      <p>Name: {{hike.name}}</p>
      <p>Length: {{hike.length}} miles</p>
      <p>Elevation Gain: {{hike.elevation_gain}} feet</p>
      <a v-bind:href="`/hikes/${hike.id}`" class="button">Details</a>
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
      message: "Search for a Hike!",
      center: { lat: 41.9211, lng: -87.7005 },
      markers: [
        // { lat: 45.508, lng: -73.587 },
        // { lat: 44.508, lng: -73.587 },
      ],
      currentPlace: null,
      zoom: 8,
      hikes: [],
    };
  },
  computed: {
    // createMarkers: function () {
    //   return this.hikes.forEach((hike) => {
    //     hike.latitude;
    //   });
    // },
  },
  mounted: function () {
    this.hikesIndex();
    // console.log("fetching all hikes");
    // axios.get("/api/hikes").then((response) => {
    //   console.log(response.data);
    //   this.hikes = response.data;
    // });
  },
  methods: {
    hikesIndex: function () {
      console.log("fetching all hikes");
      axios.get("/api/hikes").then((response) => {
        console.log(response.data);
        this.hikes = response.data;
      });
      // console.log("feching first hike");
      // console.log(this.hikes[0]);
      // console.log(response.data[0]);
      // this.markers = this.hikes.
    },
    displayHikes: function () {
      console.log("creating markers");
      console.log(this.hikes[0].latitude);
      for (var i = 0; i < this.hikes.length; i++) {
        if (this.hikes[i].latitude !== null) {
          const marker = {
            lat: this.hikes[i].latitude,
            lng: this.hikes[i].longitude,
          };
          this.markers.push(marker);
        }
      }
      // this.hikes.forEach((i) => {
      //   this.markers;
      console.log(this.markers[0].lat);
      console.log(this.markers.length);
      this.$refs.mapRef.$mapPromise.then((map) => {
        map.panTo({ lat: this.markers[0].lat, lng: this.markers[0].lng });
      });
    },
  },
};
</script>

