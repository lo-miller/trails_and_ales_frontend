<template>
  <div class="hikes-index">
    <div class="wrapper style1">
      <div class="inner">
        <section class="container box feature1">
          <div class="row">
            <div class="col-12">
              <header class="first major">
              </header>
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
              <section class="box article-list">
                <h2 class="second icon solid fa-mountain">Nearby Hikes</h2>
                <div class="row">
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
    };
  },
  computed: {},
  mounted: {},
  methods: {},
};
</script>

