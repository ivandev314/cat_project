<script setup>
import items from "../assets/cats.json";
import Card from "./Card.vue";
</script>

<template>
  <ul class="list">
    <Card
      v-for="item in items.cats"
      :key="item.id"
      :name="item.name"
      :color="item.color"
      :age="item.age"
    />
  </ul>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.list {
  padding: $main-component-padding;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
</style>
