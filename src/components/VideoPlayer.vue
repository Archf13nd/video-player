<template>
  <div class="screen-container">
    <div class="background"></div>
    <div class="video-wrapper">
      <div class="video-container shadow--out">
        <div class="video-player shadow--in">
          <video
            ref="videoPlayer"
            src="https://pixabay.com/videos/download/video-7262_large.mp4?attachment"
          ></video>
        </div>
      </div>
      <div class="video-controls shadow--in">
        <div class="controls">
          <div
            v-if="!videoPlaying"
            class="button button__play shadow--out"
            @click="togglePlay"
          >
            ☺
          </div>
          <div
            v-if="videoPlaying"
            class="button button__pause shadow--out"
            @click="togglePlay"
          >
            II
          </div>
          <div class="volume-controls">
            <div class="button button__volume shadow--out">A</div>
            <div class="volume-slider"></div>
          </div>
        </div>
        <div class="controls">
          <div class="button button__settings shadow--out">S</div>
          <div class="button button__expand shadow--out">E</div>
        </div>
      </div>
    </div>
    <div class="message-board-container">
      <div class="message-board shadow--out"></div>
    </div>

    <div class="below-video">
      <div class="social-container">
        <div class="social-buttons">
          <div class="button_social shadow--out">LIKE</div>
          <div class="button_social shadow--out">SHARE</div>
        </div>
        <div class="social-data shadow--in">
          <h3>Date created: {{ dateCreated }}</h3>
          <h3>Views: {{ totalViews }}</h3>
        </div>
      </div>
      <div class="video-description shadow--out">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
          delectus libero ad? Amet perferendis repellendus sunt, maiores
          molestiae eligendi quos.
        </p>
      </div>
      <div class="load-comments-bar shadow--in"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      totalViews: 666,
      dateCreated: "03/03/2021",
      videoPlaying: false,
    };
  },
  methods: {
    togglePlay() {
      console.log(this.$refs.videoPlayer);
      this.videoPlaying = !this.videoPlaying;
      this.videoPlaying
        ? this.$refs.videoPlayer.play()
        : this.$refs.videoPlayer.pause();
      return this.videoPlaying;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dev-border {
  border: 1px solid #000;
}

.screen-container {
  position: relative;
  display: grid;
  grid-template: 100rem calc(100vh - 100rem) / 160rem 1fr;
  background: rgba(52, 57, 61, 0.945);
  /* background: rgba(52, 57, 61, 0); */
  color: #ff4d15;
}

.below-video {
  position: relative;
  /* background: #000; */
  margin: 2rem 0rem 5rem 10rem;
  /* min-height: 17rem; */
  display: flex;
  justify-content: space-between;
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

.video-wrapper {
  position: relative;
  margin: 10rem 0 0 10rem;
  width: fit-content;
  height: fit-content;
}

.video-container {
  position: relative;
  padding: 3rem;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease-in;
  z-index: 5;
  background: #34393d;
}

.video-wrapper:hover .video-container {
  transform: translateY(-5rem);
}

.video-player {
  width: 100%;
  height: 100%;
  padding: 2rem;
  border-radius: 10px;
}

video {
  width: 100%;
  height: auto;
  border: 0.5rem solid rgb(26, 29, 31);
}

.video-controls {
  position: absolute;
  bottom: 0rem;
  width: 100%;
  height: 10rem;
  z-index: 1;
  transition: transform 0.5s ease-in;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}

.controls {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  margin: 0 3rem;
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

.button:nth-child(even) {
  margin: 1rem 2rem;
}

.message-board-container {
  width: 100%;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  padding: 10rem 10rem 5rem 10rem;
}

.message-board {
  width: 100%;
  height: 100%;
  background: rgba(52, 57, 61, 0);
}

.social-container {
}

.social-buttons {
  width: fit-content;
  height: fit-content;
  display: flex;
}

.button_social {
  width: 14rem;
  height: 6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  transition: transform 0.5s ease-in;
}

.button_social:hover {
  transform: translateY(-2rem);
}

.button_social:last-child {
  margin-left: 5rem;
}

.social-data {
  /* padding: 0.5rem; */
  margin-top: 2rem;
}

.social-data > h3 {
  color: #ff4d15;
  font-size: 1.5rem;
  padding: 0.5rem;
}

.video-description {
  width: 70%;
  height: 100%;
  font-size: 2rem;
  padding: 1rem;
}

.shadow--out {
  box-shadow: 4px 4px 2px rgba(27, 29, 31, 0.24), -4px -4px 2px #596267;
}

.shadow--in {
  box-shadow: inset -4px -4px 4px #585f65, inset 4px 4px 4px #111314;
}

.load-comments-bar {
  position: absolute;
  bottom: -3rem;
  width: 100%;
  height: 1rem;
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
