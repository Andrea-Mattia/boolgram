<template>
  <!-- SUGGESTED PROFILES -->
  <div class="suggested">
    <div class="suggested-profile">
      <div class="profile-info">
        <img
          :src="profiles.profile_picture"
          :alt="`${profiles.profile_name} avatar`"
        />
        <span class="fwb">{{ profiles.profile_name }}</span>
      </div>
      <div class="profile-action" @click="follow = !follow">
        {{ follow ? "Segui già" : "Segui" }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Suggested",
  props: {
    profiles: Array,
  },
  data() {
    return {
      follow: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/vars";

.suggested {
  @include df("horizontal");
  flex-direction: column;
  .suggested-profile {
    @include df("vertical");
    justify-content: space-between;
    margin-top: 2rem;
    .profile-info {
      @include df("vertical");
      justify-content: space-between;
      img {
        height: 32px;
        width: 32px;
        border-radius: 50%;
      }
      span {
        margin-left: 1rem;
      }
    }
    .profile-action {
      color: $txt-action;
      cursor: pointer;
    }
  }
}
</style>
