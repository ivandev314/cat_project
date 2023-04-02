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
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    onSearchTermChanged(value) {
      this.$emit("searchTermChanged", value);
    },
  },
};
</script>

<template>
  <div class="search_sort_filter">
    <Search v-model="searchTerm" @searchTermChanged="onSearchTermChanged" />
    <Sort />
    <Filter />
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
