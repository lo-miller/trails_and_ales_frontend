<template>
  <div>
    <div class="wrapper style1">
      <div class="inner">
          <section class="container box feature1">
            <div class="row">
              <div class="col-12">
                <header class="first major">
                  <h2>Brewery Search Coming Soon</h2>
                </header>
              </div>
            </div>
          </section>
      </div>
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