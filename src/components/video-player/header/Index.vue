<template>
  <header>
    <div class="nav-button">
      <div class="nav-button__bar"></div>
      <div class="nav-button__bar"></div>
      <div class="nav-button__bar"></div>
    </div>
    <form>
      <input type="text" class="search-bar" placeholder="Search" />
      <div class="search-button" type="submit">
        <div class="search-button__icon"></div>
      </div>
    </form>

    <div class="profile-icon"></div>
  </header>
</template>

<style lang="scss" scoped>
header {
  @include neu-shadow-outset--4px;
  background: $color-background;
  z-index: 100;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.nav-button {
  width: 36px; //todo create better size for icon
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transform-origin: left;

  &:hover > &__bar:last-child {
    transform: translateY(-12px) rotateZ(45deg);
    // transform-origin: left;
  }
  &:hover > &__bar:nth-child(even) {
    opacity: 0;
    // transform-origin: right;
  }
  &:hover > &__bar:first-child {
    transform: translateY(12px) rotateZ(-45deg);
    // transform-origin: right;
  }

  &__bar {
    width: 100%;
    height: 6px;
    background: $color-primary;

    @include neu-shadow-inset--bar;
  }
}

form {
  height: 5rem;
  display: flex;
  border-radius: 10px;
  box-shadow: 0 6px 4px -4px $color-primary;
}

.search-bar {
  width: 83.33vw;
  height: 100%;
  border-radius: 10px 0 0 10px;
  @include neu-shadow-inset--2px;

  &::placeholder {
    font-size: 18px;
    opacity: 0.5;
    // line-height: 5rem;
  }

  &:focus {
    @include neu-shadow-inset--4px;
  }
}

.search-button {
  position: relative;
  width: 10rem;
  height: 100%;
  border-radius: 0 10px 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @include neu-shadow-outset--2px;

  &__icon {
    width: 3rem;
    height: 3rem;
    background: url("../../../assets/icons/search.svg");
  }
}

.profile-icon {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background: url("../../../assets/img/profile-icon.svg");
  margin-right: 2rem;
}
</style>
