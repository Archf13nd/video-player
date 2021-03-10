<template>
  <video-player />
</template>

<script>
import VideoPlayer from "./components/video-player/Index.vue";

export default {
  name: "App",
  components: {
    VideoPlayer
  }
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
  font-family: $font-primary;
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

h1,
h2 {
  @include neu-shadow-inset-text--title;
}

input {
  outline: none;
  border: none;
  background: none;
  color: $color-primary;
  letter-spacing: 2px;
  padding: 2rem;
}
input::placeholder {
  color: $color-primary;
  letter-spacing: 2px;
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
