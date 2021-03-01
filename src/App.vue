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

<style>
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
p {
  margin: 0;
}
</style>
