<script setup></script>

<template>
  <button class="show_more">
    Show more
    <img class="control_left" src="@/assets/icons/arrow.svg" />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.show_more {
  background-color: $alert;
  border: none;
  border-radius: 5px;
  padding: 15px 30px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  margin: 50px auto 100px;
  font-size: 20px;
  display: flex;
  align-items: center;
  gap: 10px;

  img {
    transform: rotate(270deg);
  }

  &:hover {
    background-color: $primary;
  }
}
</style>
