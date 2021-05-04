<template>
  <div id="main-wrapper">
    <div class="wrapper style1">
      <div class="logout">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  created: function () {
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    localStorage.removeItem("user_id");
    this.$router.push("/");
  },
};
</script>
