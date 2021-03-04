<template>
  <div class="message-board-container">
    <div class="message-board shadow--in"></div>
  </div>
</template>

<style scoped>
.message-board-container {
  width: 100%;
  height: 100%;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  padding: 10rem 10rem 0rem 10rem;
}

.message-board {
  width: 100%;
  height: 100%;
  background: rgba(52, 57, 61, 0);
}
</style>
