<template>
  <div class="comment-rating">
    <div class="comment-rating__icon comment-rating__icon--thumbs-up" @click="rate('like')"></div>
    <div class="comment-rating__counter neu-shadow-inset-text--sm">{{ counter }}</div>
    <div class="comment-rating__icon comment-rating__icon--thumbs-down" @click="rate('dislike')"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 666
    };
  },
  methods: {
    rate(action) {
      action === "like" ? this.counter++ : this.counter--;
    }
  }
};
</script>

<style lang="scss" scoped>
.comment-rating {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 3rem;
  height: 6rem;

  &__counter {
    width: 3rem;
    text-align: center;
    font-size: 9px;
    font-weight: bold;
    flex-shrink: 0;
  }

  &__icon {
    user-select: none;
    cursor: pointer;
    width: 1.5rem;
    height: 1.5rem;

    &--thumbs-up {
      background: no-repeat center / 100% url("../../../../assets/icons/thumbsup.png");
    }

    &--thumbs-down {
      background: no-repeat center / 100% url("../../../../assets/icons/thumbsdown.png");
    }
  }
}
</style>
