<template>
  <header>
    <div class="container site-header">
      <!-- LOGO -->
      <div class="site-logo">
        <a href="javascript:history.go(0)">
          <img src="../assets/img/boolgram-logo.png" alt="Boolgram logo" />
        </a>
      </div>
      <!-- SEARCH -->
      <div class="site-search">SITE SEARCH HERE</div>
      <!-- USER -->
      <div class="site-user">SITE USER HERE</div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";

header {
  position: fixed;
  width: 100%;
  padding: 0.5rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
  .site-header {
    @include df("vertical");
    justify-content: space-between;
    .site-logo {
      width: 100px;
    }
  }
}
</style>
