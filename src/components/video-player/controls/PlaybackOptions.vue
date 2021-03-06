<template>
  <div v-if="settingsOpened && !playbackClicked" @click="playbackOptions('start')" class="settings-box neu-shadow-inset--2px">
    <p>Playback Speed</p>
  </div>

  <div v-if="settingsOpened && playbackClicked" class="settings-box neu-shadow-inset--2px">
    <div v-if="playbackClicked && !relativeSpeedChosen" class="playback-choice">
      <div @click="playbackOptions('slow')"><p>Slow</p></div>
      <div v-if="playbackClicked" @click="playbackOptions(1)">1</div>
      <div @click="playbackOptions('fast')"><p>Fast</p></div>
    </div>
    <div class="playback-choice" v-if="slowerClicked">
      <div @click="playbackOptions(0.25)" class="playback-speed">
        <p>.25</p>
      </div>
      <div @click="playbackOptions(0.5)" class="playback-speed">
        <p>.50</p>
      </div>
      <div @click="playbackOptions(0.75)" class="playback-speed">
        <p>.75</p>
      </div>
    </div>
    <div class="playback-choice" v-if="fasterClicked">
      <div @click="playbackOptions(1.5)" class="playback-speed">
        <p>1.5</p>
      </div>
      <div @click="playbackOptions(1.75)" class="playback-speed">
        <p>1.75</p>
      </div>
      <div @click="playbackOptions(2)" class="playback-speed">
        <p>2</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["settingsOpened"],
  emits: ["playbackValue"],
  data() {
    return {
      playbackClicked: false,
      relativeSpeedChosen: false,
      fasterClicked: false,
      slowerClicked: false,
      speedNotOne: false
    };
  },
  methods: {
    resetPlaybackOptions() {
      this.playbackClicked = false;
      this.relativeSpeedChosen = false;
      this.fasterClicked = false;
      this.slowerClicked = false;
    },
    playbackOptions(value) {
      if (typeof value === "number") {
        console.log(typeof value);
        this.$emit("playbackValue", value);
        value === 1 ? (this.speedNotOne = true) : (this.speedNotOne = false);
        this.resetPlaybackOptions();
      }
      switch (value) {
        case "start":
          this.playbackClicked = true;
          break;
        case "fast":
          this.fasterClicked = true;
          this.relativeSpeedChosen = true;
          break;
        case "slow":
          this.slowerClicked = true;
          this.relativeSpeedChosen = true;
          break;
      }
    }
  },
  computed: {
    isSettingsOpened() {
      console.log(this.settingsOpened);
      return this.settingsOpened;
    }
  }
};
</script>

<style lang="scss" scoped>
.settings-box {
  width: 14rem;
  height: 4rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > p {
    font-size: 1.6rem;
  }
}

.playback-choice {
  width: 100%;
  height: 100%;
  display: grid;
  grid-auto-flow: column;
  justify-items: center;
  justify-content: stretch;
  align-items: center;
  // grid-template-columns: repeat(auto-fit, minmax(1fr, 50%));
  grid-template-columns: repeat(auto-fit, minmax(20px, 50%));
  & > div {
    width: 100%;
    height: 100%;
    font-size: 200%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    @include neu-shadow-inset--2px;

    &:first-child {
      letter-spacing: 1.2px;
    }

    & > p {
      padding: 0;
      width: 40px;
      margin: 0 auto;
      // min-width: 45px;
      text-align: center;
    }
  }
}
</style>
