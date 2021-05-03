<template>
  <div id="app">
    <div id="page-wrapper">

			<!-- Header -->
      <div id="header-wrapper">
        <div class="container">

          <!-- Header -->
            <header id="header">
              <div class="inner">

                <!-- Logo -->
                  <h1><a href="index.html" id="logo">Trails and Ales</a></h1>

                <!-- Nav -->
                  <nav id="nav">
                    <ul>
                      <li><a href="/">Home</a></li>
                      <li><a href="/hikes">Explore</a>
                        <ul>
                          <li><a href="/hikes">Hikes</a></li>
                          <li><a href="/breweries">Breweries</a></li>
                          <li><a href="#">Featured Adventures</a></li>
                          <li><a href="#">Popular Pairings</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Plan</a>
                        <ul>
                          <li><a href="#">Saved Adventures</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">More</a>
                        <ul>
                          <li><a href="#">Sign In</a></li>
                          <li>
                            <a href="#">Resources</a>
                            <ul>
                              <li><a href="#">Beer Trails</a></li>
                              <li><a href="#">Land Acknowledgement</a></li>
                            </ul>
                          </li>
                          <li><a href="/about">About</a></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>

              </div>
            </header>

          <!-- Banner -->
            <div id="banner">
              <h2>TRAILS AND ALES</h2>
              <br />
              <p>Pair your outdoor adventure with some craft brews!</p>
            </div>
        </div>
      </div>

      <router-view />

			<!-- Footer Wrapper -->
      <div id="footer-wrapper">
        <footer id="footer" class="container">
          <div class="row">
            <div class="col-6 col-12-medium imp-medium">
              <!-- Links -->
                <section>
                  <h2>Page Navigation</h2>
                  <ul class="divided">
                    <li><a href="#">Quam turpis feugiat dolor</a></li>
                    <li><a href="#">Amet ornare in hendrerit </a></li>
                  </ul>
                </section>
            </div>
            <div class="col-6 col-12-medium imp-medium">
              <!-- Links -->
                <section>
                  <h2>Resources</h2>
                  <ul class="divided">
                    <li><a href="#">Quam turpis feugiat dolor</a></li>
                    <li><a href="#">Amet ornare in in lectus</a></li>
                  </ul>
                </section>
            </div>
          </div>
          <br>
          <br>
          <div class="row">
            <!-- About -->
            <section>
              <p>Design by <a href="http://twitter.com/ajlkn">ZeroFour</a> </p>
            </section>
          </div>
        </footer>
      </div>

		</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
  },
};
</script>

<style>

</style>
