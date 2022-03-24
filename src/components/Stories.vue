<template>
  <div class="site-stories">
    <div
      class="story"
      v-for="(profile, index) in $attrs.profiles"
      :key="`profile-${index}`"
    >
      <img
        :src="profile.profile_picture"
        :alt="`${profile.profile_name} avatar`"
      />
      <span>{{ profile.profile_name }}</span>
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
  padding: 2.5rem;
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  overflow-x: auto;
  .story {
    @include df("both");
    flex-direction: column;
    flex-shrink: 0;
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
    img {
      height: 65px;
      width: 65px;
      padding: 3px;
      border-radius: 50%;
      background: linear-gradient(215deg, red, orange);
      background-clip: padding-box;
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
