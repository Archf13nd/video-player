<template>
  <div class="comment">
    <h3 class="comment__title">{{ name }}</h3>
    <div class="comment__divider"></div>
    <div class="comment__contents">
      <div class="comment__contents__img neu-shadow-inset--2px"></div>
      <slot class="comment__contents__rating"></slot>
      <p class="comment__contents__txt">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "img", "content"]
};
</script>

<style lang="scss" scoped>
.comment {
  display: flex;
  flex-direction: column;

  &__title {
    font-size: 12px;
  }

  &__divider {
    width: 100%;
    height: 2px;
    background: $color-background-shadow;
  }

  &__contents {
    display: flex;
    margin-top: 3px;

    &__img {
      width: 6rem;
      height: 6rem;
      background: url("../../../../assets/img/me.jpg");
      background-size: cover;
      margin-right: 3px;
      border-radius: 50%;
      flex: 0 0 6rem;
    }

    &__txt {
      margin-left: 6px;
      font-size: 13px;
      flex: 1 1 300px;
      height: 100%;
    }
  }
}
</style>
