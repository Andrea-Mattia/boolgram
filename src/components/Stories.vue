<template>
  <div class="site-stories">
    <!-- placeholder content -->
    <div class="story">
      <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
      <span>profile.name</span>
    </div>
    <div class="story">
      <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
      <span>profile.name</span>
    </div>
    <div class="story">
      <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
      <span>profile.name</span>
    </div>
    <div class="story">
      <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
      <span>profile.name</span>
    </div>
    <div class="story">
      <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
      <span>profile.name</span>
    </div>
    <div class="story">
      <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
      <span>profile.name</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stories",
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/vars";

.site-stories {
  @include df("");
  justify-content: space-between;
  padding: 2.5rem;
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  .story {
    @include df("both");
    flex-direction: column;
    cursor: pointer;
    img {
      height: 65px;
      border-radius: 50%;
      background: linear-gradient(215deg, red, orange);
      background-clip: padding-box;
      padding: 3px;
    }
    span {
      max-width: 65px;
      margin-top: 0.5rem;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>
