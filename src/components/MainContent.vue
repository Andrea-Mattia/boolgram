<template>
  <main>
    <section class="container">
      <div class="site-feed">
        <Stories />
        <Post />
      </div>
      <Sidebar />
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
      flex-basis: 60%;
    }
  }
}
</style>
