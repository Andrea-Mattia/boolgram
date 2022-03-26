<template>
  <header>
    <div class="container site-header">
      <!-- LOGO -->
      <div class="site-logo">
        <a href="javascript:window.scrollTo({top: 0, behavior: 'smooth'})">
          <img src="../assets/img/boolgram-logo.png" alt="Boolgram logo" />
        </a>
      </div>
      <!-- SEARCH -->
      <div class="site-search">
        <input type="text" placeholder="Cerca" />
      </div>
      <!-- USER -->
      <div class="site-user">
        <font-awesome-icon icon="fa-regular fa-heart" size="xl" />
        <font-awesome-icon icon="fa-solid fa-house" size="xl" />
        <img src="../assets/img/user-avatar.png" alt="User avatar" />
      </div>
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
  z-index: 1;
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
    .site-search {
      input {
        height: 36px;
        min-width: 125px;
        width: 260px;
        padding-left: 1rem;
        background: #efefef;
        border: none;
        border-radius: 8px;
      }
    }
    .site-user {
      @include df("vertical");
      & * {
        margin-left: 1.5rem;
      }
      img {
        height: 40px;
        border-radius: 50%;
      }
    }
  }
}
</style>
