<template>
  <div class="screen-container">
    <div class="background"></div>
    <div class="video-player">
      <div class="video-container element-shadow-inset">
        <video
          src="https://pixabay.com/videos/download/video-16160_large.mp4?attachment"
        ></video>
      </div>
    </div>
    <div class="message-board-container">
      <div class="message-board element-shadow"></div>
    </div>
    <div class="social-container">
      <div class="social-buttons">
        <div class="button_social element-shadow">LIKE</div>
        <div class="button_social element-shadow">SHARE</div>
      </div>
      <div class="video-desc element-shadow"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.screen-container {
  position: relative;
  display: grid;
  grid-template: 100rem calc(100vh - 100rem) / 160rem 1fr;
  background: rgba(52, 57, 61, 0.945);
  /* background: rgba(52, 57, 61, 0); */
}

.social-container {
  /* background: #000; */
  margin: 0 0 5rem 10rem;
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

video {
  width: 100%;
  height: auto;
  border: 0.5rem solid rgb(26, 29, 31);
}

.video-container {
  margin: 10rem 0 0 10rem;
  padding: 3rem;
  border-radius: 10px;
}

.message-board-container {
  width: 100%;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  padding: 10rem;
}

.message-board {
  width: 100%;
  height: 100%;
  background: rgba(52, 57, 61, 0);
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
}

.button_social:last-child {
  margin-left: 5rem;
}

.video-desc {
  width: 70%;
  height: 100%;
}

.element-shadow {
  box-shadow: 4px 4px 2px rgba(27, 29, 31, 0.24), -4px -4px 2px #596267,
    inset -1px -1px 4px #636970, inset 1px 1px 4px #131517;
}
.element-shadow-inset {
  box-shadow: inset -4px -4px 4px #585f65, inset 4px 4px 4px #111314;
}

@media screen and (max-width: 1600px) {
  .screen-container {
    grid-template: min-content 30vh 30vh / 100vw;
  }

  .video-container {
    margin: 5rem;
    padding: 5rem 5rem;
  }

  .social-container {
    margin: 5rem;
  }
  .message-board-container {
    grid-column: auto;
    grid-row: auto;
  }
}
</style>
