<template>
  <div class="master-container">
    <the-screen
      :fullscreen="isFullscreen"
      :videoStart="videoStart"
      :newTime="newTime"
      :volume="volume"
      @timeUpdate="updateTime"
    >
      <the-controls
        @progressBarClicked="getNewTime($event)"
        @playBtnClicked="togglePlay()"
        @pauseBtnClicked="togglePlay()"
        @volumeBarClicked="updateVolume($event)"
        @fullscreenBtnClicked="openFullscreen()"
        :duration="duration"
        :currentTime="currentTime"
        :videoPlaying="videoStart"
      ></the-controls>
    </the-screen>
    <the-information></the-information>
    <the-comments></the-comments>
  </div>
</template>

<script>
import TheComments from "./video-player/Comments.vue";
import TheInformation from "./video-player/Information.vue";
import TheScreen from "./video-player/Screen.vue";
import TheControls from "./video-player/Controls.vue";
export default {
  components: {
    TheControls,
    TheComments,
    TheInformation,
    TheScreen,
  },
  data() {
    return {
      isFullscreen: false,
      videoStart: false,
      volume: 1,
      newTime: null,
      currentTime: 0,
      duration: null,
    };
  },
  methods: {
    updateTime({ duration, currentTime }) {
      this.duration = duration;
      this.currentTime = currentTime;
    },
    getNewTime(e) {
      this.newTime = e * this.duration;
    },
    togglePlay() {
      this.videoStart = !this.videoStart;
    },
    updateVolume(newVolume) {
      this.volume = newVolume;
    },
    openFullscreen() {
      this.isFullscreen = !this.isFullscreen;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.master-container {
  display: grid;
  grid-template: 100rem calc(100vh - 100rem) / 160rem 1fr;
  background: rgba(52, 57, 61, 0.945);
  /* background: rgba(52, 57, 61, 0); */
  color: #ff4d15;
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/stone.jpg");
  background-size: 100vh;
  /* background-repeat: repeat-y; */
  z-index: -1;
}

@media screen and (max-width: 1600px) {
  .screen-container {
    grid-template: min-content 30vh 30vh / 100vw;
  }

  .video-container {
    margin: 5rem;
    padding: 5rem 5rem;
  }
  .message-board-container {
    grid-column: auto;
    grid-row: auto;
  }
}
</style>
