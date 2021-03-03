<template>
  <div class="video">
    <div class="video__player-container shadow--out">
      <div class="video__player-border shadow--in">
        <video
          ref="videoPlayer"
          src="https://pixabay.com/videos/download/video-16160_large.mp4?attachment"
          :volume="volume"
          :currentTime="getNewTime"
          @timeupdate="updateTime"
          @loadeddata="updateTime"
        ></video>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["fullscreen", "videoStart", "newTime", "volume"],
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
  },
  computed: {
    getNewTime() {
      return this.newTime;
    },
  },
  watch: {
    videoStart() {
      this.videoStart
        ? this.$refs.videoPlayer.play()
        : this.$refs.videoPlayer.pause();
    },
    fullscreen() {
      this.openFullScreen(this.$refs.videoPlayer);
    },
  },
  mounted() {
    // this.updateTime(this.$refs.videoPlayer);
  },
};
</script>

<style lang="scss" scoped>
.video {
  position: relative;
  margin: 10rem 0 0 10rem;
  width: fit-content;
  height: fit-content;

  &__player-container {
    position: relative;
    padding: 3rem;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease-in;
    z-index: 5;
    background: #34393d;
  }
  &:hover &__player-container {
    transform: translateY(-6rem);
  }
}

video {
  width: 100%;
  height: auto;
  border: 0.5rem solid rgb(26, 29, 31);
}
</style>
