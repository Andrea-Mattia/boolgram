<template>
  <div id="app">
    <Header />

    <MainContent :content="profiles" />
  </div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header.vue";
import MainContent from "./components/MainContent.vue";

export default {
  name: "App",
  components: {
    Header,
    MainContent,
  },
  data() {
    return {
      apiProfiles:
        "https://flynn.boolean.careers/exercises/api/boolgram/profiles",
      profiles: [],
    };
  },
  created() {
    axios
      .get(this.apiProfiles)
      .then((res) => {
        // console.log(res.data);
        this.profiles = res.data;
      })
      .catch((err) => {
        console.log("ERROR:", err);
      });
  },
};
</script>

<style lang="scss">
@import "./styles/general";
@import "./styles/utilities";
</style>
