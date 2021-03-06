<template>
  <div class="site-post">
    <!-- POST HEAD -->
    <div class="post-head">
      <div class="profile-info">
        <img :src="info.profile_picture" :alt="`${info.profile_name} avatar`" />
        <span class="fwb">{{ info.profile_fullname }}</span>
      </div>
      <span class="fwb">...</span>
    </div>
    <!-- POST IMAGE -->
    <div class="post-image">
      <img :src="info.post_image" :alt="`${info.profile_name} post image`" />
    </div>
    <!-- POST BODY -->
    <div class="post-body">
      <!-- Post Icons -->
      <div class="post-content post-icons">
        <span @click="clicked = !clicked">
          <font-awesome-icon
            icon="fa-regular fa-heart"
            size="xl"
            v-if="!clicked"
          />
          <font-awesome-icon
            icon="fa-solid fa-heart"
            size="xl"
            v-else
            class="fa-beat"
          />
        </span>
        <font-awesome-icon icon="fa-regular fa-comment" size="xl" />
        <font-awesome-icon icon="fa-regular fa-paper-plane" size="xl" />
      </div>
      <!-- Post Likes -->
      <div class="post-content post-likes" v-if="info.likes.length != 0">
        <img
          :src="info.likes[0].profile_picture"
          :alt="`${info.likes[0].username} avatar`"
        />
        <span>
          Piace a <strong>{{ info.likes[0].username }}</strong>
          <span v-if="info.likes.length > 1">
            e
            <strong>
              altri
              {{ clicked ? info.likes.length : info.likes.length - 1 }}</strong
            >
          </span>
          <span v-else-if="clicked"> e <strong> a te</strong></span>
        </span>
      </div>
      <div class="post-content post-likes" v-else>
        {{ !clicked ? "Non ci sono ancora likes." : "Piace a te." }}
      </div>
      <!-- Post Creator -->
      <div class="post-content post-creator">
        <strong>{{ info.profile_name }}</strong> {{ info.post_text }}
      </div>
      <!-- Post Comments -->
      <div class="post-content post-comments">
        <span v-if="comments.length <= 3 && comments.length != 0"
          >Tutti i commenti sono mostrati.</span
        >
        <span
          class="show-comments"
          @click="showed = !showed"
          v-else-if="comments.length != 0"
        >
          {{
            showed
              ? `Mostra meno commenti`
              : `Mostra tutti e ${comments.length} i commenti`
          }}
        </span>
        <span v-else>Non ci sono ancora commenti.</span>
        <!-- Mostra i primi 3 commenti, se sono di più-->
        <ul v-if="comments.length > 3 && !showed">
          <li
            v-for="(comment, index) in comments.slice(1, 4)"
            :key="`comment-${index}`"
          >
            <strong>{{ comment.username }}</strong> {{ comment.text }}
          </li>
        </ul>
        <!-- Mostra i commenti quando sono inferiori o uguali a 3 -->
        <ul v-else-if="comments.length <= 3">
          <li v-for="(comment, index) in comments" :key="`comment-${index}`">
            <strong>{{ comment.username }}</strong> {{ comment.text }}
          </li>
        </ul>
        <!-- Mostra tutti i commenti quando viene cliccata la scritta 'Mostra tutti i commenti' -->
        <ul v-else-if="showed">
          <li v-for="(comment, index) in comments" :key="`comment-${index}`">
            <strong>{{ comment.username }}</strong> {{ comment.text }}
          </li>
        </ul>
      </div>
      <!-- Post Date -->
      <div class="post-content post-date">
        {{ dateDiffForHumans(date) }}
      </div>
      <!-- Post Add Comment -->
      <div class="post-add-comment">
        <form>
          <input
            type="text"
            placeholder="Aggiungi un commento"
            v-model="newCommentText"
          />
          <span type="submit" @click.prevent="addComment(newCommentText)">
            Pubblica
          </span>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default {
  name: "Post",
  props: {
    info: Object,
  },
  data() {
    return {
      clicked: false,
      showed: false,
      date: this.info.date.date,
      comments: this.info.comments,
      newCommentText: "",
    };
  },
  created() {
    dayjs.extend(relativeTime);
  },
  methods: {
    dateDiffForHumans(date) {
      return dayjs().to(dayjs(date));
    },
    addComment(text) {
      // Creating a new object with text property = newCommentText passed by parameter
      this.comments.push({
        text: text,
        username: "the_helljumper",
      });
      // cleaning newCommentText
      this.newCommentText = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/vars";
@import "../styles/mixins";

.site-post {
  margin-bottom: 2rem;
  background: #fff;
  border: 1px solid #ccc;
  .post-head {
    @include df("vertical");
    justify-content: space-between;
    padding: 1rem 1.5rem;
    .profile-info {
      @include df("vertical");
      img {
        height: 40px;
        width: 40px;
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
    cursor: pointer;
    img {
      height: 100%;
      width: 100%;
    }
  }
  .post-icons {
    .fa-comment,
    .fa-paper-plane {
      margin-left: 1.5rem;
    }
    .fa-heart,
    .fa-comment,
    .fa-paper-plane {
      cursor: pointer;
    }
    .fa-heart.fa-beat {
      color: red;
      animation-iteration-count: 1;
      animation-duration: 0.3s;
    }
  }
  .post-body {
    @include df("");
    flex-direction: column;
    .post-content {
      margin: 0.5rem 0;
      padding: 0 1.5rem;
    }
    .post-likes {
      @include df("vertical");
      img {
        height: 30px;
        width: 30px;
        margin-right: 1rem;
        border-radius: 50%;
      }
    }
    .post-creator {
      margin-bottom: 1rem;
    }
    .post-comments {
      margin-bottom: 0;
      span {
        color: $txt-secondary;
      }
      .show-comments {
        cursor: pointer;
      }
      ul {
        list-style: none;
        li {
          padding-top: 0.5em;
        }
      }
    }
    .post-date {
      margin: 2rem 0;
      color: $txt-secondary;
    }
    .post-add-comment {
      border-top: 1px solid #ddd;
      padding: 1rem 0;
      form {
        @include df("vertical");
        justify-content: space-between;
        input {
          flex-grow: 1;
          height: 36px;
          font-size: 18px;
          margin: 0 1.5rem;
          border: none;
          outline: none;
          border-radius: 8px;
          transition: background 0.3s linear;
          &:focus {
            background: #eee;
          }
        }
        span {
          padding-right: 1.5rem;
          color: $txt-action;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
