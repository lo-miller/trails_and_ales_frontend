<template>
  <div class="hikes-index">
    <div class="wrapper style1">
      <div class="inner">
        <section class="container box feature1">
          <div class="row">
            <div class="col-12">
              <header class="first major">
                <h2>Land Acknowledgement</h2>
              </header>
              <div style="width:80%;margin-left:auto;margin-right:auto;text-align:left">
                <p>As hikers, we already have a great appreciation for the land we visit. We have a connection to wild, beautiful spaces - they sustain our physical, emotional, mental wellbeing, and we understand respecting them and their history. It's important as we appreciate these beautiful spaces to acknowledge that we are on Indigenous land.</p>
                <p>When we share a space, it's important to acknowledge that place's past and the history and present of the Indigenous people of what we now call the United States. The land acknowledgement included in each hike's details is included to insert an awareness of Indigenous presence and land rights in everyday life.</p>
                <p>Learn more at <a href="https://native-land.ca/" style="color:blue">native-land.ca</a>. This application uses Native Land's API to search traditional territories based on a place's coordinate location.</p>
              </div>
            </div>
          </div>
        </section>
        <div class="col-8 col-12-medium imp-medium">
          <div id="content">
            <article style="width:60%;height:auto;margin-left:auto;margin-right:auto">
              <span class="image featured"><img src="images/DSC02261.JPG" alt="" /></span>
              <p style="font-style:italic;font-color:grey">Traditional territory of the Hopitutskwa, Diné Bikéyah, Nuwuvi (Southern Paiute), Pueblos, and Núu-agha-tʉvʉ-pʉ̱ (Ute)</p>
            </article>
            
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
export default {
  name: "App",
};
</script>

