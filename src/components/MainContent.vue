<template>
  <main>
    <section class="container">
      <div class="site-feed">
        <div class="site-stories">STORIES COMPONENT HERE</div>
        <div class="site-posts">POST COMPONENT HERE</div>
      </div>
      <div class="site-sidebar">SIDEBAR COMPONENT HERE</div>
    </section>
  </main>
</template>

<script>
export default {
  name: "MainContent",
  components: {},
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

main {
  section {
    @include df("verical");
    justify-content: space-between;
    padding-top: 100px;
    // fake content emulation
    .site-feed {
      flex-basis: 60%;
      .site-stories {
        height: 150px;
        padding: 1.5rem;
        margin-bottom: 2rem;
        border: 1px solid #ccc;
      }
      .site-posts {
        height: 500px;
        padding: 1.5rem;
        margin-bottom: 2rem;
        border: 1px solid #ccc;
      }
    }
  }
}
</style>
