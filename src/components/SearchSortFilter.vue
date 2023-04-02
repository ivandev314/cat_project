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
  },
};
</script>

<template>
  <div class="search_sort_filter">
    <Sort />
    <Filter @filterChanged="onFilterChanged" />
    <Search @searchTermChanged="onSearchTermChanged" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.search_sort_filter {
  padding: $main-component-padding;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  background-color: lightgrey;
}
</style>
