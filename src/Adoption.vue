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
      modalActive: false,
      condirmationActive: false,
      filter: {
        isYoungerThanSixMonths: false,
        isYoungerThanTwelveMonths: false,
        isBlack: false,
      },
      sort: {
        sortType: "age",
        sortDirection: "asc",
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
    onSortChanged(value) {
      this.sort = value;
    },
    onItemsShownChanged(value) {
      this.itemsShown = this.itemsShown + value;
      this.sort.sortType = "age";
      this.sort.sortDirection = "asc";
    },
    onAdoptClick(value) {
      this.cats = this.cats.filter((cat) => cat.id !== value);
    },
  },
  computed: {
    moreItemsToShow() {
      return this.cats.length && this.cats.length > this.itemsShown;
    },
    filteredItems() {
      let filteredCats = this.cats.filter((cat) => {
        if (this.filter.isYoungerThanSixMonths && cat.age > 6) {
          return false;
        }
        if (this.filter.isYoungerThanTwelveMonths && cat.age > 12) {
          return false;
        }
        if (this.filter.isBlack && cat.color.toLowerCase() !== "black") {
          return false;
        }
        if (
          this.searchTerm &&
          !cat.name.toLowerCase().includes(this.searchTerm.toLowerCase())
        ) {
          return false;
        }
        return true;
      });

      if (this.sort.sortType === "name") {
        filteredCats = filteredCats.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        if (this.sort.sortDirection === "desc") {
          filteredCats = filteredCats.reverse();
        }
      } else if (this.sort.sortType === "age") {
        filteredCats = filteredCats.sort((a, b) => a.age - b.age);
        if (this.sort.sortDirection === "desc") {
          filteredCats = filteredCats.reverse();
        }
      }

      return filteredCats.slice(0, this.itemsShown);
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
      @sortChanged="onSortChanged"
    />
    <List
      :items="filteredItems"
      :moreItemsToShow="moreItemsToShow"
      @itemsShownChanged="onItemsShownChanged"
      @catAdopted="onAdoptClick"
    />
  </div>
</template>

<style lang="scss" scoped></style>
