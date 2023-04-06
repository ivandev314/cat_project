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
      <img class="slider__previous_img" src="@/assets/icons/logo.svg" />
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
  background-color: $light;

  &__logo_and_search {
    display: flex;
    align-items: center;
    gap: 5rem;

    img {
      height: 6rem;
      width: auto;
    }
  }

  &__sort_and_filter {
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 10%;
  }
}

@media screen and (max-width: 1500px) {
  .action_bar {
    &__logo_and_search {
      gap: 3rem;

      img {
        height: 4rem;
        width: auto;
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  .action_bar {
    padding: 20px 100px;

    &__logo_and_search {
      gap: 2rem;

      img {
        height: 3rem;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .action_bar {
    padding: 20px 50px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;

    &__sort_and_filter {
      justify-content: space-between;
    }
  }
}

@media screen and (max-width: 768px) {
  .action_bar {
    padding: 20px 30px;
  }
}

@media screen and (max-width: 450px) {
  .action_bar {
    padding: 10px 20px;

    &__sort_and_filter {
      gap: 10px;
    }
  }
}
</style>
