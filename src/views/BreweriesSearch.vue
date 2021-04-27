<template>
  <div class="breweryMap" ref="map">
    <button v-on:click="searchBreweries">Search nearby breweries</button>
    <div class="breweryList" v-for="brewery in breweries">
      <p>Name: {{brewery.name}}</p> 
      <p>Location: {{brewery.vicinity}}</p> 
      <p>Rating: {{brewery.rating}}</p> 
      <p>Open now: {{brewery.opening_hours.open_now}}</p>
      <hr>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      location: "",
      breweries: [],
      brewery: {},
      service: null,
      lat: 47.589,
      lng: -122.227,
      type: "bar",
      keyword: "brewery",
      radius: "500",
      places: [],
    };
  },

  methods: {
    searchBreweries() {
      axios
        .get("/api/search_results")
        .then((response) => {
          console.log(response.data.results);
          console.log(response.data.results[0]);
          console.log(response.data.results[0]);
          this.breweries = response.data.results;
          console.log("all breweries");
          console.log(this.breweries);
          console.log("first brewery");
          console.log(this.breweries[0]["name"]);
        })
        .catch((error) => {
          console.log(error.message);
        });
    },
  },
};
</script>