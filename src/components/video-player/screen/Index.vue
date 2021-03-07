<template>
  <div class="video">
    <slot></slot>
    <div class="video__player-container neu-shadow-outset--4px">
      <div class="video__player-border neu-shadow-inset--2px">
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
    videoEnded() {}
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
  width: fit-content;
  height: fit-content;

  &__player-container {
    position: relative;
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
}

video {
  width: 100%;
  height: auto;
  border: 0.5rem solid rgb(26, 29, 31);
}
</style>
