<template>
  <aside class="site-sidebar">
    <div class="sidebar">
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
      <div class="suggested">
        <div class="suggested-head fwb">
          <span>Suggerimenti per te</span>
          <span @click="show = !show">Mostra tutti</span>
        </div>
        <!-- SHOW ONLY 4 PROFILES ON FIRST LOAD -->
        <div v-if="!show">
          <Suggested
            v-for="(profile, index) in profiles.slice(1, 5)"
            :key="`profile-sidebar-${index}`"
            :profile="profile"
          />
        </div>
        <!-- SHOW ALL PROFILES -->
        <div v-else>
          <Suggested
            v-for="(profile, index) in profiles"
            :key="`profile-sidebar-${index}`"
            :profile="profile"
          />
        </div>
      </div>
      <transition name="slide-fade">
        <div class="suggested-credits" v-if="profiles.length != 0">
          &copy; 2022 INSTAGRAM FROM META
        </div>
      </transition>
    </div>
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
  data() {
    return {
      show: true,
    };
  },
  created() {
    setTimeout(() => {
      this.show = false;
    }, 3500);
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
  position: relative;
  .sidebar {
    position: sticky;
    top: 80px;
    .user-info {
      @include df("vertical");
      justify-content: space-between;
      margin-bottom: 1.5rem;
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
    .suggested {
      @include df("horizontal");
      flex-direction: column;
      .suggested-head {
        @include df("");
        justify-content: space-between;
        color: $txt-secondary;
        span:last-child {
          color: $txt-primary;
          cursor: pointer;
        }
      }
    }
    .suggested-credits {
      margin-top: 2rem;
      text-transform: uppercase;
      color: rgba($txt-secondary, 0.3);
    }
    .slide-fade-enter-active {
      transition: all 1s ease;
    }
    .slide-fade-enter {
      transform: translateX(10px);
      opacity: 0;
    }
  }
}
</style>
