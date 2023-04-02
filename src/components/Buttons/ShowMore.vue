<script setup></script>

<template>
  <button class="show_more">
    Show more
    <img class="show_more__icon" src="@/assets/icons/arrow.svg" />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.show_more {
  background-color: $background;
  border: none;
  border-radius: 15px;
  padding: 15px 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 50px auto 100px;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 2px solid $secondary;
  color: $text;

  &__icon {
    transform: rotate(270deg);
  }

  &:hover {
    background-color: $primary;
    color: white;
  }
}
</style>
