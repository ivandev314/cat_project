<script setup></script>

<template>
  <button class="show_more">Show more</button>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.show_more {
  background-color: $alert;
  /* color: $white; */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    /* background-color: $primary-color-hover; */
  }
}
</style>
