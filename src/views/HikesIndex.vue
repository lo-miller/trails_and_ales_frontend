<template>
  <div class="hikes-index">

    <div class="wrapper style1">
      <div class="inner">

        <!-- Feature 1 -->
          <section class="container box feature1">
            <div class="row">
              <div class="col-12">
                <header class="first major">
                  <h2>This is an important heading</h2>
                  <p>And this is where we talk about why we’re <strong>pretty awesome</strong> ...</p>
                </header>
              </div>
              <div class="col-4 col-12-medium">
                <section>
                  <a href="#" class="image featured"><img src="images/pic01.jpg" alt="" /></a>
                  <header class="second icon solid fa-user">
                    <h3>Here's a Heading</h3>
                    <p>And a subtitle</p>
                  </header>
                </section>
              </div>
              <div class="col-4 col-12-medium">
                <section>
                  <a href="#" class="image featured"><img src="images/pic02.jpg" alt="" /></a>
                  <header class="second icon solid fa-cog">
                    <h3>Also a Heading</h3>
                    <p>And another subtitle</p>
                  </header>
                </section>
              </div>
              <div class="col-4 col-12-medium">
                <section>
                  <a href="#" class="image featured"><img src="images/pic03.jpg" alt="" /></a>
                  <header class="second icon solid fa-chart-bar">
                    <h3>Another Heading</h3>
                    <p>And yes, a subtitle</p>
                  </header>
                </section>
              </div>
              <div class="col-12">
                <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus. Praesent semper
                bibendum ipsum, et tristique augue fringilla eu. Vivamus id risus vel dolor auctor euismod
                quis eget mi. Etiam eu ante risus. Aliquam erat volutpat. Aliquam luctus mattis lectus sit
                amet pulvinar. Nam nec turpis.</p>
              </div>
            </div>
          </section>

      </div>
    </div>
    <div class="wrapper style2">
      <div class="inner">

        <!-- Feature 2 -->
          <section class="container box feature2">
            <div class="row">
              <div class="col-6 col-12-medium">
                <section>
                  <header class="major">
                    <h2>And this is a subheading</h2>
                    <p>It’s important but clearly not *that* important</p>
                  </header>
                  <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.
                  Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat.
                  Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi
                  consequat etiam.</p>
                  <footer>
                    <a href="#" class="button medium icon solid fa-arrow-circle-right">Let's do this</a>
                  </footer>
                </section>
              </div>
              <div class="col-6 col-12-medium">
                <section>
                  <header class="major">
                    <h2>This is also a subheading</h2>
                    <p>And is as unimportant as the other one</p>
                  </header>
                  <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus.
                  Praesent semper mod quis eget mi. Etiam eu ante risus. Aliquam erat volutpat.
                  Aliquam luctus et mattis lectus sit amet pulvinar. Nam turpis nisi
                  consequat etiam.</p>
                  <footer>
                    <a href="#" class="button medium alt icon solid fa-info-circle">Wait, what?</a>
                  </footer>
                </section>
              </div>
            </div>
          </section>

        </div>
    </div>
    <div class="wrapper style3">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col-8 col-12-medium">

              <!-- Article list -->
                <section class="box article-list">
                  <h2 class="icon fa-file-alt">Recent Posts</h2>

                  <!-- Excerpt -->
                    <!-- <article class="box excerpt" v-for="hike in hikes">
                      <a href="#" class="image left"><img src="images/pic04.jpg" alt="" /></a>
                      <div>
                        <header>
                          <span class="date">July 24</span>
                          <h3><a href="#">Repairing a hyperspace window</a></h3>
                        </header>
                        <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus
                        semper mod quisturpis nisi consequat etiam lorem. Phasellus quam turpis,
                        feugiat et sit amet ornare in, hendrerit in lectus semper mod quis eget mi dolore.</p>
                      </div>
                    </article> -->
                    	<div class="row">
							<article class="col-6 col-12-xsmall work-item">
								<a href="images/fulls/01.jpg" class="image fit thumb"><img src="images/thumbs/01.jpg" alt="" /></a>
								<h3>Magna sed consequat tempus</h3>
								<p>Lorem ipsum dolor sit amet nisl sed nullam feugiat.</p>
							</article>
						
						</div>
                </section>
            </div>
            <div class="col-4 col-12-medium">

              <!-- Spotlight -->
                <section class="box spotlight">
                  <h2 class="icon fa-file-alt">Spotlight</h2>
                  <article>
                    <a href="#" class="image featured"><img src="images/pic07.jpg" alt=""></a>
                    <header>
                      <h3><a href="#">Neural Implants</a></h3>
                      <p>The pros and cons. Mostly cons.</p>
                    </header>
                    <p>Phasellus quam turpis, feugiat sit amet ornare in, hendrerit in lectus semper mod
                    quisturpis nisi consequat ornare in, hendrerit in lectus semper mod quis eget mi quat etiam
                    lorem. Phasellus quam turpis, feugiat sed et lorem ipsum dolor consequat dolor feugiat sed
                    et tempus consequat etiam.</p>
                    <p>Lorem ipsum dolor quam turpis, feugiat sit amet ornare in, hendrerit in lectus semper
                    mod quisturpis nisi consequat etiam lorem sed amet quam turpis.</p>
                    <footer>
                      <a href="#" class="button alt icon solid fa-file-alt">Continue Reading</a>
                    </footer>
                  </article>
                </section>

            </div>
          </div>
        </div>
      </div>
    </div>

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

