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
/* Global CSS */
.shadow--out {
  box-shadow: 4px 4px 2px rgba(27, 29, 31, 0.24), -4px -4px 2px #596267;
}

.shadow--in {
  box-shadow: inset -4px -4px 4px #585f65, inset 4px 4px 4px #111314;
}

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
