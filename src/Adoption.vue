<script>
import List from "./components/List.vue";
import SearchSortFilter from "./components/SearchSortFilter.vue";
import Slider from "./components/Slider.vue";
import cats from "./assets/data/cats.json";

export default {
  components: {
    Slider,
    SearchSortFilter,
    List,
  },
  data() {
    return {
      cats: cats.items,
      searchTerm: "",
      itemsShown: 20,
      sortType: "name",
      sortDirection: "asc",
      modalActive: false,
      condirmationActive: false,
      filter: {
        isYoungerThanSixMonths: false,
        isYoungerThanTwelveMonths: false,
        isBlack: false,
      },
      slider: {
        sliderActive: false,
        sliderLeftToRight: true,
      },
    };
  },
  methods: {
    onSearchTermChanged(value) {
      this.searchTerm = value;
    },
    onFilterChanged(value) {
      this.filter = value;
    },
  },
};
</script>

<template>
  <div>
    <Slider />
    <SearchSortFilter
      @searchTermChanged="onSearchTermChanged"
      @filterChanged="onFilterChanged"
    />
    {{ filter.isBlack }}
    {{ searchTerm }}
    <List :items="cats" />
  </div>
</template>

<style lang="scss" scoped></style>
