<script setup></script>

<template>
  <button class="show_more">
    Show more
    <img class="show_more__img" src="@/assets/icons/arrow.svg" />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.show_more {
  border: none;
  border-radius: $border-radius-large;
  padding: 1rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 3rem auto 6rem;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border: 2px solid $secondary;
  color: $text;

  &__img {
    transform: rotate(270deg);
    height: 1.5rem;
  }

  &:hover {
    background-color: $primary;
    color: white;
  }
}
</style>
