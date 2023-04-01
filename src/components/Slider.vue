<script setup>
import Arrow from "./Slider/Arrow.vue";
</script>

<template>
  <div class="slider">
    <p>slider</p>
    <Arrow />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.slider {
  padding: $main-component-padding;
  height: 200px;
  background-color: lightgoldenrodyellow;
}
</style>
