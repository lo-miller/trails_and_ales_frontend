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
                  <br />
                  <div class="search">
                    <v-select v-model="selected" :options= "searchSelectOptions" :reduce="state => state.code" label="state" />
                      <!-- <option value="" disabled selected>Choose a state to hike in</option>
                      <option value="WA">Washington</option>
                      <option value="NC">North Carolina</option> -->
                    <button v-on:click="hikesIndex" style="margin-bottom: 2em">Search for Hikes</button>
                    <button v-on:click="displayHikes" style="margin-bottom: 2em">Show Markers</button>
                  </div>

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
                      :clickable="true"
                      @click="toggleInfo(m,index)"
                    >
                    </gmap-marker>
                    
                    <gmap-info-window
                    :options="infoOptions"
                    :position="infoPosition"
                    :opened="infoOpened"
                    @closeclick="infoOpened=false">
                      {{infoContent}}
                      <br>
                      <a v-bind:href="infoLink">Details</a>
                    </gmap-info-window>

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
      markers: [],
      currentPlace: null,
      zoom: 8,
      hikes: [],
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
      searchSelectOptions: [
        { state: "North Carolina", code: "NC" },
        { state: "Washington", code: "WA" },
      ],
      selected: "",
    };
  },
  computed: {},
  mounted: function () {
    // this.hikesIndex();
    // $(document).ready(function () {
    //   $(".mdb-select").materialSelect();
    // });
  },
  methods: {
    hikesIndex: function () {
      var params = {
        state: this.selected,
      };
      console.log(this.selected);
      console.log("fetching all hikes");
      axios.get("/api/hikes", { params }).then((response) => {
        console.log(response.data);
        this.hikes = response.data;
      });
      console.log(this.hikes.length);
      // console.log(this.params);
    },
    displayHikes: function () {
      console.log(this.selected);
      console.log("creating markers");
      console.log(this.hikes[0].latitude);
      for (var i = 0; i < this.hikes.length; i++) {
        if (this.hikes[i].latitude !== null) {
          const marker = {
            name: this.hikes[i].name,
            url: `/hikes/${this.hikes[i].id}`,
            lat: this.hikes[i].latitude,
            lng: this.hikes[i].longitude,
          };
          this.markers.push(marker);
        }
      }
      console.log(this.markers[0].lat);
      console.log(this.markers.length);
      this.$refs.mapRef.$mapPromise.then((map) => {
        map.panTo({ lat: this.markers[0].lat, lng: this.markers[0].lng });
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
      this.infoLink = marker.url;
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

