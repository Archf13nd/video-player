<template>
  <div class="video-information">
    <div class="video-information__above-the-fold">
      <div class="video-information__stats">
        <div class="title"><h1>The Ocean</h1></div>
        <div class="bar"></div>
        <div class="video-information__stats--data-views">
          <h3>03/03/2021</h3>
          <h3>666,666 views</h3>
        </div>
      </div>

      <div class="social">
        <div class="social__buttons-container">
          <div class="social__button-container" @click="like">
            <div class="social__button neu-shadow-outset--2px" :class="{ animate: likeClicked }">
              <div class="social__button--like"></div>
            </div>
            <div class="social__counter neu-shadow-inset--2px">
              <p>{{ likeCount }}</p>
            </div>
          </div>
          <div class="social__button-container">
            <div class="social__button neu-shadow-outset--2px" :class="{ animate: shareClicked }" @click="dislike">
              <div class="social__button--dislike"></div>
            </div>
            <div class="social__counter neu-shadow-inset--2px">
              <p>{{ shareCount }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="video-uploader"></div>
    <div class="video-description neu-shadow-inset--4px">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus libero ad? Amet perferendis repellendus sunt, maiores molestiae eligendi quos.
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
      shareClicked: false
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
    dislike() {
      if (!this.shareClicked) {
        setTimeout(() => {
          this.shareCount++;
        }, 150);
      }
      this.shareClicked = true;
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 20px;
  letter-spacing: 4px;
}

.video-information {
  // position: relative;
  // height: 100%;
  margin: 3rem 0 0rem 10rem;

  &__above-the-fold {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
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
    width: 6rem;
    height: 6rem;
    border-radius: 8px;
    background: #34393d;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;

    &--dislike {
      width: 100%;
      height: 100%;
      background: no-repeat center / 60% url("../../../assets/icons/dislike.svg");
    }
    &--like {
      width: 100%;
      height: 100%;
      background: no-repeat center / 60% url("./../../../assets/icons/like.svg");
    }
  }

  &__counter {
    position: relative;
    background: $color-background-shadow;
    z-index: 1;
    top: 0rem;
    width: 4rem;
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

.bar {
  width: 100%;
  height: 0.5rem;
  @include neu-shadow-inset--2px;
}

.animate {
  animation: dropRise 0.3s ease-out forwards;
}
</style>
