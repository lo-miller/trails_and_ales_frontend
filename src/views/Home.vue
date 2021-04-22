<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <br>
    <button v-on:click="hikesIndex">Load Hike Index</button>
    <br>
    <button v-on:click="createMarkers">Create Markers</button>
    <br>
    <div class="map">
      <gmap-map
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
      <p>Coordinates: latitude:{{hike.latitude}}, longitude: {{hike.longitude}}</p>
      <hr>
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
      message: "Welcome to Vue.js!",
      center: { lat: 45.508, lng: -73.587 },
      markers: [
        // { lat: 45.508, lng: -73.587 },
        // { lat: 44.508, lng: -73.587 },
      ],
      currentPlace: null,
      zoom: 8,
      hikes: [],
    };
  },
  mounted: function () {
    console.log("fetching all hikes");
    axios.get("/api/hikes").then((response) => {
      console.log(response.data);
      this.hikes = response.data;
    });
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
    createMarkers: function () {
      console.log("creating markers");
      console.log(this.hikes.length);
      // this.hikes.forEach((i) => {
      //   this.markers;
    },
  },
};
</script>

