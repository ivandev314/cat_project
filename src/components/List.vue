<script setup>
import Card from "./Card.vue";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
</script>

<template>
  <ul class="list">
    <Card
      v-for="item in items"
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
  background-color: $background;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-between;
  gap: 40px;
}
</style>
