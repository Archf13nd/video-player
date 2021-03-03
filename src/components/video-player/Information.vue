<template>
  <div class="video-information">
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio delectus
        libero ad? Amet perferendis repellendus sunt, maiores molestiae eligendi
        quos.
      </p>
    </div>
    <div class="load-comments-bar shadow--in"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateCreated: "03/03/2030",
      totalViews: "666",
    };
  },
};
</script>

<style scoped>
.video-information {
  position: relative;
  /* background: #000; */
  margin: 2rem 0rem 5rem 10rem;
  /* min-height: 17rem; */
  display: flex;
  justify-content: space-between;
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

.load-comments-bar {
  position: absolute;
  bottom: -3rem;
  width: 100%;
  height: 1rem;
}
</style>
