<template>
  <div class="video-information">
    <div class="social">
      <div class="social__buttons-container">
        <div class="social__button-container" @click="like">
          <div
            class="social__button neu-shadow-outset--2px"
            :class="{ animate: likeClicked }"
          >
            LIKE
          </div>
          <div class="social__counter neu-shadow-inset--2px">
            <p>{{ likeCount }}</p>
          </div>
        </div>
        <div class="social__button-container">
          <div
            class="social__button neu-shadow-outset--2px"
            :class="{ animate: shareClicked }"
            @click="share"
          >
            SHARE
          </div>
          <div class="social__counter neu-shadow-inset--2px">
            <p>{{ shareCount }}</p>
          </div>
        </div>
      </div>
      <div class="social-data neu-shadow-inset--2px">
        <h3>Date created: {{ dateCreated }}</h3>
        <h3>Views: {{ totalViews }}</h3>
      </div>
    </div>
    <div class="video-description neu-shadow-inset--4px">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus
        libero ad? Amet perferendis repellendus sunt, maiores molestiae eligendi
        quos.
      </p>
    </div>
    <!-- <div class="load-comments-bar shadow--in"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateCreated: "03/03/2030",
      totalViews: "666",
      likeCount: 666,
      shareCount: 666,
      likeClicked: false,
      shareClicked: false,
    };
  },
  methods: {
    like() {
      if (!this.likeClicked) {
        setTimeout(() => {
          this.likeCount++;
        }, 150);
      }
      this.likeClicked = true;
    },
    share() {
      if (!this.shareClicked) {
        setTimeout(() => {
          this.shareCount++;
        }, 150);
      }
      this.shareClicked = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.video-information {
  // position: relative;
  // height: 100%;
  margin: 3rem 0 0rem 10rem;
  display: flex;
  justify-content: space-between;
}

.social {
  &__buttons-container {
    width: fit-content;
    height: fit-content;
    display: flex;
  }

  &__button-container {
    &:last-child {
      margin-left: 2rem;
    }
  }

  &__button {
    position: relative;
    z-index: 3;
    width: 14rem;
    height: 6rem;
    border-radius: 8px;
    background: #34393d;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
  }

  &__counter {
    position: relative;
    background: $color-background-shadow;
    z-index: 1;
    top: 0rem;
    width: 12rem;
    height: 2rem;
    margin: 0 auto;
    border-radius: 0 0 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    & > p {
      font-size: 12px;
      color: $color-highlight;
    }
  }
}

.social-data {
  padding: 1rem;
  height: 8rem;
  margin-top: 2rem;
  border-radius: 8px;
}

.social-data > h3 {
  font-size: 1.5rem;
  padding: 0.5rem;
}

.video-description {
  width: 70%;
  // height: calc(100% - 3rem);
  border-radius: 8px;
  font-size: 2rem;
  padding: 1rem;

  @media screen and (max-width: 1700px) {
    margin-right: 10rem;
  }
}

.load-comments-bar {
  position: absolute;
  bottom: -3rem;
  width: 100%;
  height: 1rem;
}

.animate {
  animation: dropRise 0.3s ease-out forwards;
}
</style>
