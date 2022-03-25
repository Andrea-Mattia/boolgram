<template>
  <section class="container">
    <div class="loader">
      <div class="site-stories">
        <div
          class="story"
          v-for="(profile, index) in profiles"
          :key="`profile-${index}`"
        >
          <span>immagine della storia</span>
          <span>nome dell'utente</span>
        </div>
      </div>
      <!-- posts -->
      <div
        class="site-post"
        v-for="(post, index) in posts"
        :key="`post-${index}`"
      >
        <!-- POST HEAD -->
        <div class="post-head">
          <span>da fare rotindo come l'avatar</span>
          <div>
            <span>scritta piu lunga</span>
            <span>scritta piu corta</span>
          </div>
        </div>
        <!-- POST IMAGE -->
        <div class="post-image">da fare grigio animato</div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Loader",
  props: {
    profiles: Array,
    posts: Array,
  },
};
</script>

<style lang="scss" scoped>
.loader {
  position: absolute;
  top: 100px;
  background: #ccc;
}
</style>
