<template>
  <div class="controls shadow--in">
    <div
      class="controls__progress-slider shadow--in"
      @click="progressBarClicked"
    >
      <div
        class="controls__progress-slider--fill"
        :style="{ width: getProgressBarPercent }"
      ></div>
    </div>
    <div class="controls__button-container">
      <div
        v-if="!videoPlaying"
        class="button button--play shadow--out"
        @click="playBtnClicked"
      >
        ☺
      </div>
      <div
        v-if="videoPlaying"
        class="button button--pause shadow--out"
        @click="pauseBtnClicked"
      >
        II
      </div>
      <div class="volume">
        <div class="button button--volume shadow--out">A</div>
        <div class="volume__slider shadow--in" @click="volumeBarClicked">
          <div
            class="volume__slider--fill"
            :style="{ width: volumeBarWidth }"
          ></div>
        </div>
      </div>
    </div>
    <div class="controls__button-container">
      <div class="button button--settings shadow--out">S</div>
      <div
        class="button button--expand shadow--out"
        @click="fullscreenBtnClicked"
      >
        E
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["duration", "currentTime", "videoPlaying"],
  data() {
    return {
      volumeBarWidth: "100%",
    };
  },
  methods: {
    progressBarClicked(e) {
      const barWidth = e.target.closest(".controls__progress-slider")
        .clientWidth;
      const clickTarget = e.offsetX;
      const percentage = clickTarget / barWidth;
      this.$emit("progressBarClicked", percentage);
    },
    playBtnClicked(e) {
      this.$emit("playBtnClicked", e);
    },
    pauseBtnClicked(e) {
      this.$emit("pauseBtnClicked", e);
    },
    volumeBarClicked(e) {
      const barWidth = e.target.closest(".volume__slider").clientWidth;
      const clickTarget = e.offsetX;
      const newVolume = clickTarget / barWidth;
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
  width: 100%;
  height: 10rem;
  z-index: 1;
  transition: transform 0.5s ease-in;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;

  &__progress-slider {
    position: absolute;
    top: 3rem;
    width: 100%;
    height: 2rem;

    &--fill {
      background: rgb(255, 136, 0);
      height: 100%;
    }
  }

  &__button-container {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    margin: 0 3rem;

    & > .button {
      margin-right: 2rem;
    }
    &:last-child > .button {
      margin-left: 2rem;
    }
  }
}

.button {
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
</style>
