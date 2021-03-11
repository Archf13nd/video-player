<template>
  <div class="master-container">
    <the-header></the-header>
    <the-screen
      class="the-screen"
      :fullscreen="isFullscreen"
      :videoStart="videoStart"
      :newTime="newTime"
      :volume="volume"
      :playbackRate="playbackRate"
      @timeUpdate="updateTime"
      @videoEnded="videoEnded"
      @restartVideo="restartVideo"
    >
      <the-controls
        @progressBarClicked="getNewTime($event)"
        @TogglePlayBtnClicked="togglePlay()"
        @volumeBarClicked="updateVolume($event)"
        @fullscreenBtnClicked="openFullscreen()"
        @playbackRate="updatePlaybackRate($event)"
        @settingsBtnClicked="controls.settingsOpened = !controls.settingsOpened"
        :duration="duration"
        :currentTime="currentTime"
        :videoPlaying="videoStart"
      >
        <the-playback-options @playbackValue="updatePlaybackRate($event)" :settingsOpened="controls.settingsOpened"></the-playback-options>
      </the-controls>
    </the-screen>
    <the-information class="the-information"></the-information>
    <the-comments class="the-comments"></the-comments>
  </div>
</template>

<script>
import TheHeader from "./header/Index.vue";
import TheComments from "./comments/Index.vue";
import TheInformation from "./information/Index.vue";
import TheScreen from "./screen/Index.vue";
import TheControls from "./controls/Index.vue";
import ThePlaybackOptions from "./controls/PlaybackOptions.vue";
export default {
  components: {
    TheHeader,
    TheControls,
    ThePlaybackOptions,
    TheComments,
    TheInformation,
    TheScreen
  },
  data() {
    return {
      isFullscreen: false,
      videoStart: false,
      volume: 1,
      playbackRate: 1,
      newTime: null,
      currentTime: 0,
      duration: null,
      controls: {
        settingsOpened: false
      }
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
    updatePlaybackRate(playbackRate) {
      // console.log(playbackRate);
      this.playbackRate = playbackRate;
    },
    openFullscreen() {
      this.isFullscreen = !this.isFullscreen;
    },
    restartVideo() {
      this.newTime = 0;
      this.videoStart = true;
    },
    videoEnded() {
      this.videoStart = false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.master-container {
  min-height: 150vh;
  display: grid;
  column-gap: 3rem;
  grid: 10rem min-content min-content / 7rem repeat(8, 1fr) 7rem;
  background: $color-background;
  color: $color-primary;
}

header {
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
}

.grid-wrapper {
  width: 100%;
  height: 100%;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
}

/* Defining layout */

.the-screen {
  grid-column: 2 / 8;
  grid-row: 2 / 3;
  // margin: 10rem 0 0 0;
}

.the-comments {
  grid-column: 8 / 10;
  grid-row: 2 / 3;
  // padding: 10rem 10rem 0rem 10rem;
}

.the-information {
  grid-column: 2 / 8;
  grid-row: 3 / 4;
}

.background {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/img/stone.jpg");
  background-size: 100vh;
  /* background-repeat: repeat-y; */
  z-index: -1;
}

@media screen and (max-width: 1300px) {
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
@media screen and (max-width: 650px) {
  .the-screen {
    margin: 0;
  }
}
</style>
