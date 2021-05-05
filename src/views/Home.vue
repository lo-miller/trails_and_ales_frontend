<template>
  <div id="main-wrapper">
    <div class="wrapper style2">
      <div class="inner">
        <div class="container">
          <div class="row">
            <div class="col-4 col-12-medium">
              <div id="sidebar">
                <section style="margin-bottom:2em;vertical-align=top">
                  <header>
                    <article style="width:80%;height:auto;">
                      <span class="image featured"><img src="images/logo3.png" alt="" style="background: transparent"/></span>
                    </article>			
                  </header>
                </section>
                <section style="margin-bottom:2em;vertical-align=top">
                  <header class="major" style="margin-bottom:1em">
                    <h2 style="margin-bottom: 1em">Login</h2>
                  </header>
                  <div>
                    <a href="/login" class="button icon solid fa-mountain" style="width:100%;vertical-align=top">Login</a>
                  </div>
                </section>
                <section style="margin-bottom:2em;vertical-align=top">
                  <header class="major" style="margin-bottom:1em">
                    <h2 style="margin-bottom: 1em">Trails</h2>
                  </header>
                  <div>
                    <a href="/hikes" class="button icon solid fa-hiking" style="width:100%;vertical-align=top">Search for hikes near you</a>
                  </div>
                </section>
                <section style="margin-bottom:2em;vertical-align=top">
                  <header class="major" style="margin-bottom:1em">
                    <h2 style="margin-bottom: 1em">Ales</h2>
                  </header>
                  <div>
                    <a href="/breweries" class="button icon solid fa-beer" style="width:100%;vertical-align=top">Search for breweries near you</a>
                  </div>
                </section>
              </div>
            </div>
            <div class="col-8 col-12-medium imp-medium">
              <div id="content">
                <article>
                  <header class="major">
                    <h2>Happy Trails!</h2>
                    <p>We are passionate about both amazing hikes and great craft breweries! If you are too, use our tools to plan your next epic outdoor adventure to include both. See you out there!</p>
                  </header>
                  <p>Use the <em>Explore</em> section to search for <a href="/hikes">hikes</a>  and <a href="/breweries">breweries</a>, or check out your <a href="/saved_adventures">saved adventures</a> and recommendations in the <em>Plan</em> section.</p>
                  <span class="image featured"><img src="images/DSC01787.JPG" alt="" /></span>
                  <p style="font-style:italic;font-color:grey">Traditional territory of the Núu-agha-tʉvʉ-pʉ̱ (Ute)</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
    };
  },
  methods: {},
};
</script>