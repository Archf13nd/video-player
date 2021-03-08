<template>
  <div class="video">
    <slot></slot>
    <div class="video__player-container neu-shadow-outset--4px">
      <div class="video__player-border neu-shadow-inset--2px">
        <div v-if="isVideoEnded" class="video__overlay">
          <div class="video__overlay__button"><div class="video__overlay__button--refresh" @click="restartVideo"></div></div>
        </div>
        <video
          ref="videoPlayer"
          src="https://pixabay.com/videos/download/video-16160_large.mp4?attachment"
          :volume="volume"
          :currentTime="getNewTime"
          @timeupdate="updateTime"
          @loadeddata="updateTime"
          @ended="videoEnded"
        ></video>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["fullscreen", "videoStart", "newTime", "volume", "playbackRate"],
  data() {
    return {
      isVideoEnded: false
    };
  },
  methods: {
    updateTime(e) {
      const duration = e.target.duration;
      const currentTime = e.target.currentTime;
      this.$emit("timeUpdate", { duration, currentTime });
    },
    openFullScreen(elem) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    },
    videoEnded() {
      this.$emit("videoEnded");
      this.isVideoEnded = true;
    },
    restartVideo() {
      this.$emit("restartVideo");
      this.isVideoEnded = false;
    }
  },
  computed: {
    getNewTime() {
      return this.newTime;
    }
  },
  watch: {
    videoStart() {
      this.videoStart ? this.$refs.videoPlayer.play() : this.$refs.videoPlayer.pause();
    },
    fullscreen() {
      this.openFullScreen(this.$refs.videoPlayer);
    },
    playbackRate() {
      this.$refs.videoPlayer.playbackRate = this.playbackRate;
    }
  },
  mounted() {
    // this.updateTime(this.$refs.videoPlayer);
  }
};
</script>

<style lang="scss" scoped>
.video {
  position: relative;
  width: calc(100% - 10rem);
  height: calc(100% - 10rem);

  &__player-container {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 3rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    background: #34393d;
    transition: transform 0.2s ease-in;
    // transform: translateY(-7rem);
  }

  &:hover &__player-container {
    transform: translateY(-7rem);
  }

  &__overlay {
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    border: 3rem solid $color-background;
    z-index: 10;
    background: rgba(0, 0, 0, 0.815);
    display: flex;
    justify-content: center;
    align-items: center;

    &__button {
      width: 24rem;
      height: 24rem;
      border-radius: 50%;
      background: $color-background;
      @include neu-shadow-inset--2px;

      &:hover {
        @include neu-shadow-inset--4px;
      }

      &--refresh {
        width: 100%;
        height: 100%;
        background: no-repeat center / 50% url("../../../assets/icons/refresh.png");
      }
    }
  }

  &__player-border {
    width: 100%;
    height: 100%;
  }
}

video {
  width: 100%;
  height: auto;
  border: 0.5rem solid rgba(26, 29, 31, 0.404);
}
</style>
