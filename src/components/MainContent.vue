<template>
  <main>
    <section class="container">
      <div class="site-feed">
        <Stories :profiles="profiles" />
        <Post
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
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

main {
  section {
    @include df("verical");
    justify-content: space-between;
    padding-top: 100px;
    .site-feed {
      width: 60%;
    }
    .site-stories {
      @include df("");
      padding: 2.5rem;
      margin-bottom: 2rem;
      border: 1px solid #ccc;
      overflow-x: auto;
    }
  }
}
</style>
