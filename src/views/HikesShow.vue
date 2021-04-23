<template>
  <div class="hikes-show">
    <h1>{{ message }}</h1>
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
      <h3><a v-bind:href="hike.url">{{hike.name || "hike not found"}}</a></h3>
      <p>Description: {{hike.description ||" "}}</p>
      <p>Difficulty: {{hike.difficulty ||" "}}</p>
      <p>Elevation Gain: {{hike.elevation_gain ||" "}} feet</p> 
      <p>Highest Point: {{hike.highest_point ||" "}}</p>
      <p>Length: {{hike.length ||" "}} miles</p>
      <p>Features: {{hike.features}}</p>
      <p>Required Pass: {{hike.required_pass}}</p>
       
      <hr> 
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
      center: { lat: 41.9211, lng: -87.7005 },
      markers: [{ lat: 41.9211, lng: -87.7005 }],
      currentPlace: null,
      zoom: 12,
      hike: {},
    };
  },
  created: function () {
    console.log("fetching one hike");
    console.log(this.$route.params.id);
    axios.get(`/api/hikes/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.hike = response.data;
    });
  },
  methods: {},
};
</script>

