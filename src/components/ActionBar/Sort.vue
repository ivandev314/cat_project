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
    <h4>Sort by</h4>
    <div class="sort__xy">
      <div class="sort__group">
        <div class="sort__group__buttons">
          <input
            type="radio"
            name="sort_by"
            value="name"
            @change="onSortChanged(sort)"
            v-model="sort.sortType"
            id="name"
          />
          <label class="radio circle" for="name">
            <span class="big"> <span class="small"></span> </span>Name
          </label>
          <input
            type="radio"
            name="sort_by"
            value="age"
            @change="onSortChanged(sort)"
            v-model="sort.sortType"
            đ
            id="age"
          />
          <label class="radio circle" for="age">
            <span class="big"> <span class="small"></span> </span>Age
          </label>
        </div>
      </div>
      <div class="sort__group">
        <div class="sort__group__buttons">
          <input
            type="radio"
            name="sort_direction"
            value="asc"
            @change="onSortChanged(sort)"
            v-model="sort.sortDirection"
            id="ascending"
          />
          <label class="radio circle" for="ascending">
            <span class="big"> <span class="small"></span> </span>Ascending
          </label>
          <input
            type="radio"
            name="sort_direction"
            value="desc"
            @change="onSortChanged(sort)"
            v-model="sort.sortDirection"
            id="descending"
          />
          <label class="radio circle" for="descending">
            <span class="big"> <span class="small"></span> </span>Descending
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.sort {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;

  &__xy {
    display: flex;
    /* flex-direction: column; */
    gap: 20px;
  }

  &__group {
    display: flex;
    /* flex-direction: column; */
    gap: 20px;

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}

input {
  display: none;
}

label {
  display: inline-block;
  margin-right: 10px;
}

span {
  &.big {
    border-radius: 50% 50% 50% 50%;
    display: inline-block;
    height: 12px;
    margin-bottom: -12px;
    margin-right: 9px;
    padding: 50px;
    position: relative;
    top: -8px;
    width: 12px;
  }
  &.small {
    border-radius: 50% 50% 50% 50%;
    display: block;
    height: 100%;
    transition: background 0.4s ease 0s;
    width: 100%;
  }
}

.circle .big {
  cursor: pointer;
  height: 18px;
  width: 18px;
  padding: 5px;
  border: 2px solid $secondary;
}

input[type="radio"]:checked + label.circle span.small {
  background-color: $secondary;
}
</style>
