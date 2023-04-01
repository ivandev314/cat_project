<script setup>
import Search from "./FilterSortSearch/Search.vue";
import Sort from "./FilterSortSearch/Sort.vue";
import Filter from "./FilterSortSearch/Filter.vue";
</script>

<template>
  <div class="filter_sort_search">
    <Search />
    <Sort />
    <Filter />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_variables";
.filter_sort_search {
  padding: $main-component-padding;
  display: flex;
  gap: 20px;
  background-color: lightgrey;
  color: $base-color;
}
</style>
