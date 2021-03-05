<template>
  <video-player />
</template>

<script>
import VideoPlayer from "./components/VideoPlayer.vue";

export default {
  name: "App",
  components: {
    VideoPlayer,
  },
};
</script>

<style lang="scss">
/* INIT CSS */
*,
::after,
::before {
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-size: 50%;
}

html,
body {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

@keyframes dropRise {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(2rem);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
