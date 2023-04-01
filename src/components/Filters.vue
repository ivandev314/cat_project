<script setup>
import Search from "./Filters/Search.vue";
import Sort from "./Filters/Sort.vue";
import Filter from "./Filters/Filter.vue";
</script>

<template>
  <div class="filters">
    <Search />
    <Sort />
    <Filter />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_variables";
.filters {
  display: flex;
  gap: 20px;
  padding: 20px;
  background-color: lightgrey;
  color: $base-color;
}
</style>
