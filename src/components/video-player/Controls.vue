<template>
  <div class="controls neu-shadow-inset--4px">
    <div
      class="controls__progress-slider neu-shadow-inset--2px"
      @click="progressBarClicked"
    >
      <div
        class="controls__progress-slider--fill"
        :style="{ width: getProgressBarPercent }"
      ></div>
    </div>
    <div class="controls__button-container controls__button-container--left">
      <div class="button" @click="TogglePlayBtnClicked">
        <div v-if="!videoPlaying" class="button__icon button__icon--play"></div>
        <div v-if="videoPlaying" class="button__icon button__icon--pause"></div>
      </div>
      <div class="volume">
        <div class="button" @click="toggleMute">
          <div
            v-if="volume === 0"
            class="button__icon button__icon--mute"
          ></div>
          <div
            v-if="volume < 0.6 && volume > 0"
            class="button__icon button__icon--quiet"
          ></div>
          <div
            v-if="volume >= 0.6"
            class="button__icon button__icon--loud"
          ></div>
        </div>
        <div
          class="volume__slider neu-shadow-inset--2px"
          @click="volumeBarClicked"
        >
          <div
            class="volume__slider--fill"
            :style="{ width: volumeBarWidth }"
          ></div>
        </div>
      </div>
    </div>
    <div class="controls__button-container controls__button-container--right">
      <div
        v-if="showSettings"
        @click="playbackOptions('start')"
        class="settings-box neu-shadow-inset--2px"
      >
        <p v-if="!hideTitle">Playback Speed</p>
        <div
          v-if="playbackClicked && !playbackActivated"
          class="playback-choice"
        >
          <div @click="playbackOptions('fast')"><p>Fast</p></div>
          <div v-if="playbackChanged">1</div>
          <div @click="playbackOptions('slow')"><p>Slow</p></div>
        </div>
        <div class="playback-choice" v-if="slowerClicked">
          <div @click="playbackOptions(25)" class="playback-speed">
            <p>.25</p>
          </div>
          <div @click="playbackOptions(50)" class="playback-speed">
            <p>.50</p>
          </div>
          <div @click="playbackOptions(75)" class="playback-speed">
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
      <div class="button" @click="showSettings = !showSettings">
        <div class="button__icon button__icon--settings"></div>
      </div>
      <div class="button" @click="fullscreenBtnClicked">
        <div class="button__icon button__icon--expand"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["duration", "currentTime", "videoPlaying"],
  data() {
    return {
      volume: 1,
      volumeBarWidth: "100%",
      lastVolume: null,
      showSettings: false,
      hideTitle: false,
      settingsClicked: false,
      playbackActivated: false,
      playbackClicked: false,
      fasterClicked: false,
      slowerClicked: false,
      normalClicked: false,
      playbackChanged: false,
    };
  },
  methods: {
    playbackOptions(location) {
      switch (location) {
        case "start":
          this.hideTitle = true;
          this.playbackClicked = true;
          break;
        case "fast":
          this.fasterClicked = true;
          this.playbackActivated = true;
          break;
        case "slow":
          this.slowerClicked = true;
          this.playbackActivated = true;
          break;
        case 25:
          break;
        case 0:
          break;
        case 75:
          break;
        case 1.25:
          break;
        case 1.5:
          break;
        case 2:
          break;
      }
    },
    progressBarClicked(e) {
      const barWidth = e.target.closest(".controls__progress-slider")
        .clientWidth;
      const clickTarget = e.offsetX;
      const percentage = clickTarget / barWidth;
      this.$emit("progressBarClicked", percentage);
    },
    TogglePlayBtnClicked(e) {
      this.$emit("TogglePlayBtnClicked", e);
    },
    toggleMute() {
      console.log("hey");
      if (this.volume === 0) {
        this.volume = this.lastVolume;
        this.$emit("volumeBarClicked", this.lastVolume);
      } else {
        this.lastVolume = this.volume;
        this.$emit("volumeBarClicked", 0);
        this.volume = 0;
      }
    },
    volumeBarClicked(e) {
      const barWidth = e.target.closest(".volume__slider").clientWidth;
      const clickTarget = e.offsetX;
      const newVolume = clickTarget / barWidth;
      this.volume = newVolume;
      this.volumeBarWidth = `${newVolume * 100}%`;
      this.$emit("volumeBarClicked", newVolume);
    },
    fullscreenBtnClicked() {
      this.$emit("fullscreenBtnClicked");
    },
  },
  computed: {
    getProgressBarPercent() {
      return `${(this.currentTime / this.duration) * 100}%`;
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  position: absolute;
  bottom: 0rem;
  width: calc(100% - 2rem);
  margin-left: 1rem;
  height: 7rem;
  z-index: 1;
  transition: transform 0.5s ease-in;
  border-radius: 0 0 10px 10px;
  display: flex;
  justify-content: space-between;

  &__progress-slider {
    position: absolute;
    width: 100%;
    height: 1rem;

    &--fill {
      background: rgb(255, 136, 0);
      height: 100%;
    }
  }

  &__button-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    margin: 0 2rem 1px 2rem;

    &--left {
      & > .button {
        margin-right: 2rem;
      }
    }

    &--right {
      & > .button {
        margin-left: 2rem;
      }
    }
  }
}

.button {
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @include neu-shadow-outset--2px;

  &__icon {
    width: 100%;
    height: 100%;
    &--play {
      background: no-repeat center / 50% url("../../assets/icons/play.svg");
    }
    &--pause {
      background: no-repeat center / 25% url("../../assets/icons/pause.svg");
    }
    &--mute {
      background: no-repeat center / 60% url("../../assets/icons/mute.svg");
    }
    &--quiet {
      background: no-repeat center / 60% url("../../assets/icons/quiet.svg");
    }
    &--loud {
      background: no-repeat center / 60% url("../../assets/icons/loud.svg");
    }
    &--expand {
      background: no-repeat center / 50% url("../../assets/icons/expand.svg");
    }
    &--settings {
      background: no-repeat center / 50% url("../../assets/icons/settings.svg");
    }
  }
}

.volume {
  display: flex;
  align-items: center;

  &__slider {
    width: 8rem;
    height: 1rem;
    margin: 0 0 1rem 1rem;
    display: flex;
    align-items: center;

    &--fill {
      height: 70%;
      cursor: pointer;
      background: rgb(255, 102, 0);
    }
  }
}

.settings-box {
  width: 14rem;
  height: 4rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

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
