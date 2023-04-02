<script>
export default {
  data() {
    return {
      sort: {
        sortType: "name",
        sortDirection: "asc",
      },
    };
  },
  methods: {
    onSortChanged(value) {
      this.$emit("sortChanged", value);
    },
  },
};
</script>

<template>
  <div class="sort">
    <h3>Sort</h3>
    <div class="sort__xy">
      <div class="sort__group">
        <p>Sort by</p>
        <div class="sort__group__buttons">
          <label>
            <input
              type="radio"
              name="sort_by"
              value="name"
              @change="onSortChanged(sort)"
              v-model="sort.sortType"
            />
            Name</label
          >
          <label>
            <input
              type="radio"
              name="sort_by"
              value="age"
              @change="onSortChanged(sort)"
              v-model="sort.sortType"
            />
            Age</label
          >
        </div>
      </div>
      <div class="sort__group">
        <p>Sort direction</p>
        <div class="sort__group__buttons">
          <label>
            <input
              type="radio"
              name="sort_direction"
              value="asc"
              @change="onSortChanged(sort)"
              v-model="sort.sortDirection"
            />
            Ascending</label
          >
          <label>
            <input
              type="radio"
              name="sort_direction"
              value="desc"
              @change="onSortChanged(sort)"
              v-model="sort.sortDirection"
            />
            Descending</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sort {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__xy {
    display: flex;
    gap: 50px;
  }

  &__group {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
