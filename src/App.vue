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
                  <h2 style="margin:auto;vertical-align:center"><a href="/" id="logo"><span><img src="images/logo.png" alt="" style=";width:5%;height:auto;margin: 10px;"/></span></a></h2>
                <!-- Nav -->
                  <nav id="nav">
                    <div class="navbar">
                        <div class="dropdown">
                          <button class="dropbtn">Explore<i class="fa fa-carat-down"></i></button>
                          <div class="dropdown-content">
                            <a href="/hikes">Hikes</a>
                            <a href="/breweries">Breweries</a>
                          </div>
                        </div>
                        <div class="dropdown">
                          <button class="dropbtn">Plan<i class="fa fa-carat-down"></i></button>
                          <div class="dropdown-content">
                            <a href="/saved_hikes">Saved Adventures</a>
                            <a href="/featured">Featured Adventures</a>
                          </div>
                        </div>
                        <div class="dropdown">
                          <button class="dropbtn" href="/beer_trails">Resources<i class="fa fa-carat-down"></i></button>
                          <div class="dropdown-content">
                            <a href="/beer_trails">Beer Trails</a>
                            <a href="/land_acknowledgement">Land Acknowledgement</a>
                          </div>
                        </div>
                        <div class="dropdown">
                          <button class="dropbtn">More<i class="fa fa-carat-down"></i></button>
                          <div class="dropdown-content">
                            <a href="/signup">Sign Up</a>
                            <a href="/login">Login</a>
                            <a href="/logout">Logout</a>
                            <a href="/about">About</a>
                          </div>
                        </div>                       
                    </div>
                  </nav>
              </div>
            </header>
          <!-- Banner -->
            <div id="banner" style="vertical-align: middle">
              <h2>TRAILS AND ALES</h2>
              <p style="margin:0;vertical-align:top">Pair your outdoor adventure with some cold craft brews!</p>
              <br />
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
                    <li><a href="/">Home</a></li>
                    <li><a href="/hikes">Hikes</a></li>
                    <li><a href="/login">Login</a></li>
                  </ul>
                </section>
            </div>
            <div class="col-6 col-12-medium imp-medium">
              <!-- Links -->
                <section>
                  <h2>Resources</h2>
                  <ul class="divided">
                    <li><a href="https://github.com/lo-miller/trails_and_ales_frontend">Frontend Github Repo</a></li>
                    <li><a href="https://github.com/lo-miller/backend_capstone">Backend Github Repo</a></li>
                    <li>Bootstrap template by <a href="http://twitter.com/ajlkn">ZeroFour</a> </li>
                  </ul>
                </section>
            </div>
          </div>
        </footer>
      </div>

		</div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    isLoggedIn: function () {
      console.log("logged in");
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    getUserId: function () {
      return localStorage.getItem("user_id");
    },
  },
};
</script>

<style>
</style>
