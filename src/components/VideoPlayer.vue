<template>
  <div class="master-container">
    <the-screen
      class="the-screen"
      :fullscreen="isFullscreen"
      :videoStart="videoStart"
      :newTime="newTime"
      :volume="volume"
      @timeUpdate="updateTime"
    >
      <the-controls
        @progressBarClicked="getNewTime($event)"
        @TogglePlayBtnClicked="togglePlay()"
        @volumeBarClicked="updateVolume($event)"
        @fullscreenBtnClicked="openFullscreen()"
        :duration="duration"
        :currentTime="currentTime"
        :videoPlaying="videoStart"
      ></the-controls>
    </the-screen>
    <the-information class="the-information"></the-information>
    <the-comments class="the-comments"></the-comments>
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
<style lang="scss" scoped>
.master-container {
  min-height: 100vh;
  display: grid;
  grid-template: min-content 21rem / repeat(2, minmax(640px, 33.33vw)) 1fr;
  background: $color-background;
  color: $color-primary;
}

/* Defining layout */

.the-screen {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  margin: 10rem 0 0 10rem;
}

.the-comments {
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  padding: 10rem 10rem 0rem 10rem;
}

.the-information {
  grid-column: 1 / 3;
  grid-row: 2 / 3;
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../assets/img/stone.jpg");
  background-size: 100vh;
  /* background-repeat: repeat-y; */
  z-index: -1;
}

@media screen and (max-width: 1700px) {
  .master-container {
    grid-template: min-content 21rem 500px / repeat(2, 50vw);
  }

  .the-screen {
    margin: 5rem 10rem 0 10rem;
  }
  .the-comments {
    padding: 5rem 10rem;
    grid-column: 1 / 3;
    grid-row: 3 / 4;
  }
  .the-information {
    grid-column: 1 / 3;
    grid-row: 2 / 3;
  }
}
</style>
