<script setup>
import List from "./components/List.vue";
import SearchSortFilter from "./components/SearchSortFilter.vue";
import Slider from "./components/Slider.vue";
import cats from "./assets/data/cats.json";
import { reactive, ref } from "vue";

const items = reactive(cats);
const itemsShown = ref(20);
const searchTerm = ref("");
const sortType = ref("name");
const sortDirection = ref("asc");
let modalActive = ref(false);
let condirmationActive = ref(false);
let filter = reactive({
  isYoungerThanSixMonths: false,
  isYoungerThanTwelveMonths: false,
  isBlack: false,
});
let slider = reactive({
  sliderActive: false,
  sliderLeftToRight: true,
});
</script>

<template>
  <div>
    <Slider />
    <SearchSortFilter />
    <List :items="items.cats" />
  </div>
</template>

<style lang="scss" scoped></style>
