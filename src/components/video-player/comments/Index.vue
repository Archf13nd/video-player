<template>
  <div class="message-board-container bghaha">
    <div class="message-board neu-shadow-inset--4px">
      <div class="message-board__messages">
        <the-comment v-for="message in messages" :key="message.name" :name="message.name" :img="message.img" :content="message.content"
          ><the-comment-rating></the-comment-rating
        ></the-comment>
      </div>
      <form @submit.prevent="submitMessage" class="form neu-shadow-outse--4px">
        <input class="message-bar" v-model="messageContent" type="text" />
      </form>
    </div>
  </div>
</template>

<script>
import TheComment from "./comment/Index.vue";
import TheCommentRating from "./comment/CommentRating.vue";
export default {
  components: {
    TheComment,
    TheCommentRating
  },
  data() {
    return {
      messages: [
        {
          name: "Death",
          img: "",
          content: "Hahaha I wasn't expecting that! What a plot twist"
        },
        {
          name: "The very evil one",
          img: "",
          content: "That was one crazy turn of events"
        },
        {
          name: "The supreme destroyer",
          img: "",
          content:
            "There was once a young man with no dream in his head or will in his heart. Day by day he worked and little did he play. Until, one day, his life was changed forever."
        },
        {
          name: "Adam",
          img: "",
          content: "Is that relevant to the video?"
        },
        {
          name: "Death3",
          img: "",
          content: "Hahaha I wasn't expecting that! What a plot twist"
        },
        {
          name: "The very evil one3",
          img: "",
          content: "That was one crazy turn of events"
        },
        {
          name: "The supreme destroyer3",
          img: "",
          content:
            "There was once a young man with no dream in his head or will in his heart. Day by day he worked and little did he play. Until, one day, his life was changed forever."
        },
        {
          name: "Adam3",
          img: "",
          content: "Is that relevant to the video?"
        },
        {
          name: "Death1",
          img: "",
          content: "Hahaha I wasn't expecting that! What a plot twist"
        },
        {
          name: "The very evil one1",
          img: "",
          content: "That was one crazy turn of events"
        },
        {
          name: "The supreme destroyer1",
          img: "",
          content:
            "There was once a young man with no dream in his head or will in his heart. Day by day he worked and little did he play. Until, one day, his life was changed forever."
        },
        {
          name: "Adam1",
          img: "",
          content: "Is that relevant to the video?"
        }
      ],
      messageContent: ""
    };
  },
  methods: {
    submitMessage() {
      this.messages.push({
        name: "Anon",
        img: "",
        content: this.messageContent
      });
      this.messageContent = "";
    }
  }
};
</script>

<style lang="scss" scoped>
.message-board-container {
  width: 100%;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  padding: 10rem 10rem 0rem 10rem;
}

.comment {
  margin: 0 auto;
  margin-bottom: 3rem;

  &:last-child {
    margin-bottom: 8rem;
  }
}

.message-board {
  position: relative;
  width: 100%;
  padding: 3rem 4rem;
  background: rgba(52, 57, 61, 0);

  &__messages {
    height: calc(100% - 8rem);
    max-height: 700px;
    overflow-y: scroll;

    &::-webkit-scrollbar-track {
      @include neu-shadow-inset--2px;
      border-radius: 10px;
      background-color: $color-background;
    }

    &::-webkit-scrollbar {
      width: 12px;
      background-color: $color-background;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      @include neu-shadow-inset--2px;
      background-color: $color-primary;
    }
  }
}

.message-bar {
  width: 100%;
  height: 8rem;
  background: $color-background;
}

.form {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8rem;
}

/* .bghaha {
  background: #000;
} */
</style>
