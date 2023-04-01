<script setup>
import Search from "./SearchSortFilter/Search.vue";
import Sort from "./SearchSortFilter/Sort.vue";
import Filter from "./SearchSortFilter/Filter.vue";
</script>

<template>
  <div class="search_sort_filter">
    <Search />
    <Sort />
    <Filter />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/_variables";
.search_sort_filter {
  padding: $main-component-padding;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: lightgrey;
}
</style>
