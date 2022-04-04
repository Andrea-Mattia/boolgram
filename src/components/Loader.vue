<template>
  <section class="container">
    <div class="main-content">
      <font-awesome-icon icon="fa-solid fa-circle-notch" size="4x" spin />
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
@import "../styles/animations";

section {
  position: relative;
  .main-content {
    position: absolute;
    top: 80px;
    width: 60%;
    text-align: center;
    background: #fff;
    .fa-circle-notch {
      margin-bottom: 1rem;
      color: $bg-loading;
    }
    .site-stories {
      @include df("horizontal");
      justify-content: flex-start;
      padding: 2.5rem;
      margin-bottom: 2rem;
      border: 1px solid #ccc;
      overflow-x: auto;
      .story {
        position: relative;
        height: 65px;
        width: 65px;
        flex-shrink: 0;
        border-radius: 50%;
        background: $bg-loading;
        overflow: hidden;
        &:not(:last-child) {
          margin-right: 1.5rem;
        }
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background-image: linear-gradient(
            90deg,
            rgba(#fff, 0) 0%,
            rgba(#fff, 0.8) 50%,
            rgba(#fff, 0) 100%
          );
          animation: loading 2s infinite;
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
          position: relative;
          height: 40px;
          width: 40px;
          border-radius: 50%;
          background: $bg-loading;
          overflow: hidden;
          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            background-image: linear-gradient(
              90deg,
              rgba(#fff, 0) 0%,
              rgba(#fff, 0.8) 50%,
              rgba(#fff, 0) 100%
            );
            animation: loading 2s infinite;
          }
        }
        .profile-info {
          @include df("");
          flex-direction: column;
          position: relative;
          margin-left: 1.5rem;
          overflow: hidden;
          span:first-child {
            height: 10px;
            width: 150px;
            margin-bottom: 0.5rem;
            background: $bg-loading;
          }
          span:last-child {
            height: 10px;
            width: 100px;
            background: $bg-loading;
          }
          &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            transform: translateX(-100%);
            background-image: linear-gradient(
              90deg,
              rgba(#fff, 0) 0%,
              rgba(#fff, 0.8) 50%,
              rgba(#fff, 0) 100%
            );
            animation: loading 1.5s infinite;
          }
        }
      }
      .post-cover {
        position: relative;
        height: 500px;
        width: 100%;
        background: $bg-loading;
        overflow: hidden;
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          transform: translateX(-100%);
          background-image: linear-gradient(
            90deg,
            rgba(#fff, 0) 0%,
            rgba(#fff, 0.8) 50%,
            rgba(#fff, 0) 100%
          );
          animation: loading 2s infinite;
        }
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
    z-index: 1;
    .suggested {
      @include df("horizontal");
      flex-direction: column;
      .suggested-profile {
        margin: 0.7rem 0;
        .profile-info {
          @include df("vertical");
          .profile-avatar {
            position: relative;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            background: $bg-loading;
            overflow: hidden;
            &::after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              transform: translateX(-100%);
              background-image: linear-gradient(
                90deg,
                rgba(#fff, 0) 0%,
                rgba(#fff, 0.8) 50%,
                rgba(#fff, 0) 100%
              );
              animation: loading 2s infinite;
            }
          }
          .profile-name {
            @include df("");
            flex-direction: column;
            position: relative;
            margin-left: 1.5rem;
            overflow: hidden;
            span:first-child {
              height: 10px;
              width: 150px;
              margin-bottom: 0.5rem;
              background: $bg-loading;
            }
            span:last-child {
              height: 10px;
              width: 100px;
              background: $bg-loading;
            }
            &::after {
              content: "";
              position: absolute;
              top: 0;
              right: 0;
              bottom: 0;
              left: 0;
              transform: translateX(-100%);
              background-image: linear-gradient(
                90deg,
                rgba(#fff, 0) 0%,
                rgba(#fff, 0.8) 50%,
                rgba(#fff, 0) 100%
              );
              animation: loading 1.5s infinite;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  #app {
    section.container .main-content {
      width: calc(60% - 1rem);
    }
    aside.site-sidebar {
      width: calc(40% - 0.5rem);
    }
  }
}
</style>
