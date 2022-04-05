<template>
  <main>
    <section class="container">
      <div class="site-feed">
        <Stories :profiles="profiles" />
        <Post
          @isExpanded="addClass"
          v-for="(post, index) in posts"
          :key="`post-${index}`"
          :info="post"
        />
      </div>
      <Sidebar :profiles="profiles" />
    </section>
  </main>
</template>

<script>
import Stories from "../components/Stories.vue";
import Post from "../components/Post.vue";
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "MainContent",
  components: {
    Stories,
    Post,
    Sidebar,
  },
  props: {
    profiles: Array,
    posts: Array,
  },
  methods: {
    addClass(isExpanded) {
      isExpanded = !isExpanded;
      console.log(isExpanded);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

main {
  section {
    @include df("");
    justify-content: space-between;
    padding-top: 100px;
    .site-feed {
      width: 60%;
      .expanded {
        position: relative;
        top: 50vh;
        left: 50vh;
        transform: translate(-40%, -60%);
        z-index: 3;
        &::before {
          content: "";
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
        }
      }
    }
  }
}
</style>
