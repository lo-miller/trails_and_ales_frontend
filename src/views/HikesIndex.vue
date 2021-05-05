<template>
  <div class="hikes-index">

    <div class="wrapper style1">
      <div class="inner">
        <section class="container box feature1">
          <div class="row">
            <div class="col-12">
              <header class="first major">
                <h2>Search for a hike below</h2>
                <br />
                <div class="search" style="width:400px;margin-left:auto;margin-right:auto">
                  <v-select v-model="selected" :options= "searchSelectOptions" :reduce="state => state.code" label="state" placeholder="select a state"/>
                  <button v-on:click="hikesIndex" style="margin: 2em">Search for Hikes</button>
                </div>
              </header>
              <div class="map">
                <gmap-map ref="mapRef"
                :center="center"
                :zoom="zoom"
                map-type-id="terrain"
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
          <div class="row">
            <div class="col-12-large">
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
        </section>
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
        { code: "AK", state: "Alaska" },
        { code: "AL", state: "Alabama" },
        { code: "AR", state: "Arkansas" },
        { code: "AS", state: "American Samoa" },
        { code: "AZ", state: "Arizona" },
        { code: "CA", state: "California" },
        { code: "CO", state: "Colorado" },
        { code: "CT", state: "Connecticut" },
        { code: "DC", state: "District of Columbia" },
        { code: "DE", state: "Delaware" },
        { code: "FL", state: "Florida" },
        { code: "GA", state: "Georgia" },
        { code: "GU", state: "Guam" },
        { code: "HI", state: "Hawaii" },
        { code: "IA", state: "Iowa" },
        { code: "ID", state: "Idaho" },
        { code: "IL", state: "Illinois" },
        { code: "IN", state: "Indiana" },
        { code: "KS", state: "Kansas" },
        { code: "KY", state: "Kentucky" },
        { code: "LA", state: "Louisiana" },
        { code: "MA", state: "Massachusetts" },
        { code: "MD", state: "Maryland" },
        { code: "ME", state: "Maine" },
        { code: "MI", state: "Michigan" },
        { code: "MN", state: "Minnesota" },
        { code: "MO", state: "Missouri" },
        { code: "MS", state: "Mississippi" },
        { code: "MT", state: "Montana" },
        { code: "NC", state: "North Carolina" },
        { code: "ND", state: "North Dakota" },
        { code: "NE", state: "Nebraska" },
        { code: "NH", state: "New Hampshire" },
        { code: "NJ", state: "New Jersey" },
        { code: "NM", state: "New Mexico" },
        { code: "NV", state: "Nevada" },
        { code: "NY", state: "New York" },
        { code: "OH", state: "Ohio" },
        { code: "OK", state: "Oklahoma" },
        { code: "OR", state: "Oregon" },
        { code: "PA", state: "Pennsylvania" },
        { code: "PR", state: "Puerto Rico" },
        { code: "RI", state: "Rhode Island" },
        { code: "SC", state: "South Carolina" },
        { code: "SD", state: "South Dakota" },
        { code: "TN", state: "Tennessee" },
        { code: "TX", state: "Texas" },
        { code: "UT", state: "Utah" },
        { code: "VA", state: "Virginia" },
        { code: "VI", state: "Virgin Islands" },
        { code: "VT", state: "Vermont" },
        { code: "WA", state: "Washington" },
        { code: "WI", state: "Wisconsin" },
        { code: "WV", state: "West Virginia" },
        { code: "WY", state: "Wyoming" },
      ],
      selected: "",
    };
  },
  computed: {},
  mounted: function () {},
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
        this.displayHikes();
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

