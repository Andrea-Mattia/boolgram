<template>
  <div class="site-post">
    <div class="post-head">
      <div class="profile-info">
        <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
        <span class="fwb">Profile name</span>
      </div>
      <span class="fwb">...</span>
    </div>
    <div class="post-image">
      <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
    </div>
    <div class="post-body">
      <div class="post-content post-icons">hearth and balloon</div>
      <div class="post-content post-likes">
        <img src="../assets/img/user-avatar.png" alt="Profile avatar" />
        <span
          >Piace a <strong>profile.name</strong> e
          <strong>profile.number altri</strong></span
        >
      </div>
      <div class="post-content post-creator">
        <strong>profile.name</strong> post.text
      </div>
      <div class="post-content post-comments">
        <a href="#" @click.prevent="showComments"
          >Mostra tutti e comments.number commenti</a
        >
        <ul>
          <!-- da stampare con v-for -->
          <li><strong>comment.username</strong> comment.text</li>
          <li><strong>comment.username</strong> comment.text</li>
          <li><strong>comment.username</strong> comment.text</li>
        </ul>
      </div>
      <div class="post-content post-date">
        post.date human format (like 30 hours ago)
      </div>
      <div class="post-add-comment">
        <input type="text" placeholder="Aggiungi un commento" />
        <span>Pubblica</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  methods: {
    showComments() {
      console.log("COMMENTS!");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/vars";
@import "../styles/mixins";

.site-post {
  margin-bottom: 2rem;
  border: 1px solid #ccc;
  .post-head {
    @include df("vertical");
    justify-content: space-between;
    padding: 1.5rem;
    .profile-info {
      @include df("vertical");
      img {
        height: 40px;
        padding: 3px;
        border-radius: 50%;
        background: linear-gradient(215deg, red, orange);
        background-clip: padding-box;
      }
      span {
        margin-left: 1.5rem;
      }
    }
  }
  .post-image {
    img {
      height: 100%;
      width: 100%;
    }
  }
  .post-body {
    @include df("");
    flex-direction: column;
    .post-content {
      margin: 1rem 0;
      padding: 0 1.5rem;
    }
    .post-likes {
      @include df("vertical");
      img {
        height: 30px;
        margin-right: 1rem;
        border-radius: 50%;
      }
    }
    .post-comments {
      ul {
        list-style: none;
        li {
          padding-top: 0.25em;
        }
      }
    }
    .post-add-comment {
      @include df("vertical");
      justify-content: space-between;
      border-top: 1px solid #ddd;
      margin: 1rem 0;
      padding-top: 1rem;
      input {
        font-size: 18px;
        padding-left: 1.5rem;
        border: none;
      }
      span {
        padding-right: 1.5rem;
        color: $txt-action;
      }
    }
  }
}
</style>
