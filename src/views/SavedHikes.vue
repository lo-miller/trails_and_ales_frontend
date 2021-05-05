<template>
  <div class="hikes-index">
    <div class="wrapper style3">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col-12-large">
              <section class="box article-list">
                <h2 class="second icon solid fa-mountain">Your Saved Hikes</h2>
                <h3> Happy Trails! </h3>
                <br />
                <div class="row" style="margin-left:0px">
                  <article class="col-12-medium" v-for="savedHike in savedHikes" style="width:300px">
                    <a href="images/fulls/01.jpg" class="image fit thumb"><img src="images/thumbs/01.jpg" alt="" /></a>
                    <h4 style="min-height:50px">{{savedHike.hike_name}}</h4>
                    <p>Brewery: {{savedHike.brewery_name}}</p>
                    <a v-bind:href="`/hikes/${savedHike.hike}`" class="button">Details</a>
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
      message: "Your Saved Hikes!",
      savedHikes: [],
    };
  },
  computed: {},
  mounted: function () {
    this.savedHikesIndex();
  },
  methods: {
    savedHikesIndex: function () {
      axios.get("/api/saved_hikes").then((response) => {
        console.log(response.data);
        this.savedHikes = response.data;
      });
    },
  },
};
</script>