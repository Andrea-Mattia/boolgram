<template>
  <aside class="site-sidebar">
    <!-- USER INFO -->
    <div class="user-info">
      <a href="#">
        <img src="../assets/img/user-avatar.png" alt="User avatar" />
      </a>
      <div class="user-name">
        <a href="#">
          <span class="fwb nickname">the_helljumper</span>
        </a>
        <a href="#">
          <span class="real-name">Andrea Mattia</span>
        </a>
      </div>
      <div class="user-action">
        <a href="#">Passa a</a>
      </div>
    </div>

    <!-- SUGGESTED PROFILES -->
    <div class="suggested">
      <div class="suggested-head fwb">
        <span>Suggerimenti per te</span>
        <a href="#"> Mostra tutti </a>
      </div>
      <!-- successivamente da stampare con v-for, per ora fake content -->
      <div class="suggested-profile">
        <div class="profile-info">
          <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
          <span class="fwb">profile.name</span>
        </div>
        <div class="profile-action">Segui</div>
      </div>
      <div class="suggested-profile">
        <div class="profile-info">
          <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
          <span class="fwb">profile.name</span>
        </div>
        <div class="profile-action">Segui</div>
      </div>
      <div class="suggested-profile">
        <div class="profile-info">
          <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
          <span class="fwb">profile.name</span>
        </div>
        <div class="profile-action">Segui</div>
      </div>
      <div class="suggested-profile">
        <div class="profile-info">
          <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
          <span class="fwb">profile.name</span>
        </div>
        <div class="profile-action">Segui</div>
      </div>
      <div class="suggested-profile">
        <div class="profile-info">
          <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
          <span class="fwb">profile.name</span>
        </div>
        <div class="profile-action">Segui</div>
      </div>
      <div class="suggested-profile">
        <div class="profile-info">
          <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
          <span class="fwb">profile.name</span>
        </div>
        <div class="profile-action">Segui</div>
      </div>

      <div class="suggested-credits">&copy; 2022 INSTAGRAM FROM META</div>
    </div>
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>
@import "../styles/mixins";
@import "../styles/vars";

.site-sidebar {
  flex-grow: 1;
  margin-left: 3rem;
  padding: 1.5rem;
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
  .suggested {
    @include df("horizontal");
    flex-direction: column;
    .suggested-head {
      @include df("");
      justify-content: space-between;
      color: $txt-secondary;
      a {
        color: $txt-primary;
      }
    }
    .suggested-profile {
      @include df("vertical");
      justify-content: space-between;
      margin-top: 2rem;
      .profile-info {
        @include df("vertical");
        justify-content: space-between;
        img {
          height: 32px;
          border-radius: 50%;
        }
        span {
          margin-left: 1rem;
        }
      }
      .profile-action {
        color: $txt-action;
      }
    }
    .suggested-credits {
      margin-top: 2rem;
      text-transform: uppercase;
      color: rgba($txt-secondary, 0.3);
    }
  }
}
</style>
