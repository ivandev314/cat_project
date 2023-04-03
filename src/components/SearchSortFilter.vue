<script>
import Search from "./SearchSortFilter/Search.vue";
import Sort from "./SearchSortFilter/Sort.vue";
import Filter from "./SearchSortFilter/Filter.vue";

export default {
  components: {
    Search,
    Sort,
    Filter,
  },
  methods: {
    onSearchTermChanged(value) {
      this.$emit("searchTermChanged", value);
    },
    onFilterChanged(value) {
      this.$emit("filterChanged", value);
    },
    onSortChanged(value) {
      this.$emit("sortChanged", value);
    },
  },
};
</script>

<template>
  <div class="search_sort_filter">
    <Search @searchTermChanged="onSearchTermChanged" />
    <div class="x">
      <Sort @sortChanged="onSortChanged" />
      <Filter @filterChanged="onFilterChanged" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.search_sort_filter {
  padding: $main-component-padding;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  align-items: center;

  .x {
    display: flex;
    gap: 20px;
    align-items: center;
    gap: 50px;
  }
}
</style>
