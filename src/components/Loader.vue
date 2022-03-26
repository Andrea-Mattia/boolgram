<template>
  <section class="container">
    <div class="main-content">
      <!-- STORIES -->
      <div class="site-stories">
        <div class="story"></div>
        <div class="story"></div>
        <div class="story"></div>
        <div class="story"></div>
        <div class="story"></div>
        <div class="story"></div>
        <div class="story"></div>
      </div>
      <!-- POSTS -->
      <div class="site-post">
        <!-- POST HEAD -->
        <div class="post-head">
          <span class="post-img"></span>
          <div class="profile-info">
            <span></span>
            <span></span>
          </div>
        </div>
        <!-- POST IMAGE -->
        <div class="post-cover"></div>
      </div>
    </div>

    <aside class="site-sidebar">
      <!-- SUGGESTED PROFILES -->
      <div class="suggested">
        <div class="suggested-profile">
          <div class="profile-info">
            <span class="profile-avatar"></span>
            <div class="profile-name">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="suggested-profile">
          <div class="profile-info">
            <span class="profile-avatar"></span>
            <div class="profile-name">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="suggested-profile">
          <div class="profile-info">
            <span class="profile-avatar"></span>
            <div class="profile-name">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="suggested-profile">
          <div class="profile-info">
            <span class="profile-avatar"></span>
            <div class="profile-name">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="suggested-profile">
          <div class="profile-info">
            <span class="profile-avatar"></span>
            <div class="profile-name">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="suggested-profile">
          <div class="profile-info">
            <span class="profile-avatar"></span>
            <div class="profile-name">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div class="suggested-profile">
          <div class="profile-info">
            <span class="profile-avatar"></span>
            <div class="profile-name">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  </section>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss" scoped>
@import "../styles/vars";
@import "../styles/mixins";

section {
  position: relative;
  .main-content {
    position: absolute;
    top: 100px;
    width: 60%;
    background: #fff;
    .site-stories {
      @include df("horizontal");
      padding: 2.5rem;
      margin-bottom: 2rem;
      border: 1px solid #ccc;
      overflow-x: auto;
      .story {
        height: 65px;
        width: 65px;
        flex-shrink: 0;
        border-radius: 50%;
        background: linear-gradient(
          -45deg,
          rgba(170, 170, 170, 1) 0%,
          rgba(238, 238, 238, 1) 50%,
          rgba(170, 170, 170, 1) 100%
        );
        &:not(:last-child) {
          margin-right: 1.5rem;
        }
      }
    }
    .site-post {
      margin-bottom: 2.5rem;
      border: 1px solid #ccc;
      .post-head {
        @include df("vertical");
        padding: 1rem 1.5rem;
        .post-img {
          height: 40px;
          width: 40px;
          border-radius: 50%;
          background: linear-gradient(
            -45deg,
            rgba(170, 170, 170, 1) 0%,
            rgba(238, 238, 238, 1) 50%,
            rgba(170, 170, 170, 1) 100%
          );
        }
        .profile-info {
          @include df("");
          flex-direction: column;
          margin-left: 1.5rem;
          span:first-child {
            height: 10px;
            width: 150px;
            margin-bottom: 0.5rem;
            background: linear-gradient(
              90deg,
              rgba(170, 170, 170, 1) 0%,
              rgba(238, 238, 238, 1) 50%,
              rgba(170, 170, 170, 1) 100%
            );
          }
          span:last-child {
            height: 10px;
            width: 100px;
            background: linear-gradient(
              90deg,
              rgba(170, 170, 170, 1) 0%,
              rgba(238, 238, 238, 1) 50%,
              rgba(170, 170, 170, 1) 100%
            );
          }
        }
      }
      .post-cover {
        height: 550px;
        width: 100%;
        background: linear-gradient(
          -45deg,
          rgba(170, 170, 170, 1) 0%,
          rgba(238, 238, 238, 1) 50%,
          rgba(170, 170, 170, 1) 100%
        );
      }
    }
  }
  .site-sidebar {
    position: absolute;
    top: 280px;
    right: 0;
    width: calc(40% - 3rem);
    padding: 0 0 1.5rem 1.5rem;
    background: white;
    .suggested {
      @include df("horizontal");
      flex-direction: column;
      .suggested-profile {
        margin: 1rem 0;
        .profile-info {
          @include df("vertical");
          .profile-avatar {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background: linear-gradient(
              -45deg,
              rgba(170, 170, 170, 1) 0%,
              rgba(238, 238, 238, 1) 50%,
              rgba(170, 170, 170, 1) 100%
            );
          }
          .profile-name {
            @include df("");
            flex-direction: column;
            margin-left: 1.5rem;
            span:first-child {
              height: 10px;
              width: 150px;
              margin-bottom: 0.5rem;
              background: linear-gradient(
                90deg,
                rgba(170, 170, 170, 1) 0%,
                rgba(238, 238, 238, 1) 50%,
                rgba(170, 170, 170, 1) 100%
              );
            }
            span:last-child {
              height: 10px;
              width: 100px;
              background: linear-gradient(
                90deg,
                rgba(170, 170, 170, 1) 0%,
                rgba(238, 238, 238, 1) 50%,
                rgba(170, 170, 170, 1) 100%
              );
            }
          }
        }
      }
    }
  }
}
</style>
