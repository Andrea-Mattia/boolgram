<template>
  <aside class="site-sidebar">
    <!-- USER INFO -->
    <div class="user-info">
      <a href="#">
        <img src="../assets/img/user-avatar.png" alt="User avatar" />
      </a>
      <div class="user-name">
        <a href="#" class="fwb nickname"> the_helljumper </a>
        <a href="#" class="real-name"> Andrea Mattia </a>
      </div>
      <div class="user-action">
        <a href="#">Passa a</a>
      </div>
    </div>

    <!-- SUGGESTED PROFILES -->
    <Suggested
      :profiles="profiles"
      v-for="(profile, index) in profiles"
      :key="`profile-sidebar-${index}`"
    />

    <div class="suggested-credits">&copy; 2022 INSTAGRAM FROM META</div>
  </aside>
</template>

<script>
import Suggested from "../components/Suggested.vue";

export default {
  name: "Sidebar",
  components: {
    Suggested,
  },
  props: {
    profiles: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/vars";

.site-sidebar {
  flex-grow: 1;
  margin-left: 3rem;
  padding: 1.5rem 0 1.5rem 1.5rem;
  .user-info {
    @include df("vertical");
    justify-content: space-between;
    margin-bottom: 4rem;
    img {
      height: 56px;
      border-radius: 50%;
    }
    .user-name {
      @include df("both");
      flex-direction: column;
      .nickname {
        color: $txt-primary;
      }
      .real-name {
        color: $txt-secondary;
      }
    }
    .user-action {
      a {
        color: $txt-action;
      }
    }
  }
  .suggested-credits {
    margin-top: 2rem;
    text-transform: uppercase;
    color: rgba($txt-secondary, 0.3);
  }
}
</style>
