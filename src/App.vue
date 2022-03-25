<template>
  <div id="app">
    <Header />

    <Loader v-if="loading" :profiles="profiles" :posts="posts" />
    <MainContent :profiles="profiles" :posts="posts" />
  </div>
</template>

<script>
import axios from "axios";

import Header from "./components/Header.vue";
import MainContent from "./components/MainContent.vue";
import Loader from "./components/Loader.vue";

export default {
  name: "App",
  components: {
    Header,
    MainContent,
    Loader,
  },
  data() {
    return {
      apiProfiles:
        "https://flynn.boolean.careers/exercises/api/boolgram/profiles",
      apiPosts: "https://flynn.boolean.careers/exercises/api/boolgram/posts",
      profiles: [],
      posts: [],
      loading: true,
    };
  },
  created() {
    this.getStories();
    this.getPosts();
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
  methods: {
    getStories() {
      axios
        .get(this.apiProfiles)
        .then((res) => {
          this.profiles = res.data;
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    },
    getPosts() {
      axios
        .get(this.apiPosts)
        .then((res) => {
          this.posts = res.data;
        })
        .catch((err) => {
          console.log("ERROR:", err);
        });
    },
  },
};
</script>

<style lang="scss">
@import "./styles/general";
@import "./styles/utilities";
</style>
