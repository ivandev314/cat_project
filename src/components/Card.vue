<script setup>
import { defineProps } from "vue";
defineProps({
  name: String,
  color: String,
  age: Number,
});
</script>

<template>
  <li class="card">
    <h3>{{ name }}</h3>
    <p>Color: {{ color }}</p>
    <p>Age: {{ age }}</p>
  </li>
</template>

<style lang="scss" scoped>
.card {
  border: 1px solid black;
  padding: 20px;
}
</style>
