<script>
import Search from "./ActionBar/Search.vue";
import Sort from "./ActionBar/Sort.vue";
import Filter from "./ActionBar/Filter.vue";

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
  <div class="action_bar">
    <div class="action_bar__logo_and_search">
      <p>Logo</p>
      <Search @searchTermChanged="onSearchTermChanged" />
    </div>
    <div class="action_bar__sort_and_filter">
      <Sort @sortChanged="onSortChanged" />
      <Filter @filterChanged="onFilterChanged" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.action_bar {
  padding: 20px 160px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  border-bottom: 1px solid $secondary;
  border-top: 1px solid $secondary;
  background-color: white;

  &__logo_and_search {
    display: flex;
    align-items: center;
    gap: 20%;
  }

  &__sort_and_filter {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 10%;
  }
}
</style>
