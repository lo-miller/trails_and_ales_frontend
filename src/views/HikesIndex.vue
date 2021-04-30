<template>
  <div class="hikes-index">

    <div class="wrapper style1">
      <div class="inner">

        <!-- Feature 1 -->
          <section class="container box feature1">
            <div class="row">
              <div class="col-12">
                <header class="first major">
                  <h2>Search for a hike below</h2>
                  <button v-on:click="displayHikes" style="margin-bottom: 2em">Display Hikes</button>
                  <br />
                </header>
                <div class="map">
                  <gmap-map ref="mapRef"
                  :center="center"
                  :zoom="zoom"
                  style="width:100%;  height: 800px;"
                >
                  <gmap-marker
                    :key="index"
                    v-for="(m, index) in markers"
                    :position="m"
                    @click="center=m"
                  >
                  </gmap-marker>
                </gmap-map>
                </div>
              </div>
            </div>
          </section>
      </div>
    </div>

    <div class="wrapper style3">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col-12-large">

              <!-- Article list -->
              <section class="box article-list">
                <h2 class="second icon solid fa-mountain">Nearby Hikes</h2>
                <div class="row">
                  <article class="col-12-medium" v-for="hike in hikes">
                    <a href="images/fulls/01.jpg" class="image fit thumb"><img src="images/thumbs/01.jpg" alt="" /></a>
                    <h3>{{hike.name}}</h3>
                    <p>Length: {{hike.length}} miles</p>
                    <p>Elevation Gain: {{hike.elevation_gain}} feet</p>
                    <a v-bind:href="`/hikes/${hike.id}`" class="button">Details</a>
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
#map {
  width: 100%;
  height: 100%;
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
      console.log(this.hikes.length);
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

