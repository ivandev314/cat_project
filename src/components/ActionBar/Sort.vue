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
    <div class="sort__container">
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
          <label class="circle" for="name">
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
          <label class="circle" for="age">
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
          <label class="circle" for="ascending">
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
          <label class="circle" for="descending">
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
  gap: 0.75rem;

  &__container {
    display: flex;
    gap: 1rem;
  }

  &__group {
    display: flex;
    gap: 20px;

    &__buttons {
      display: flex;
      flex-direction: column;
      gap: 10px;

      input {
        display: none;
      }

      label {
        display: inline-block;
        margin-right: 10px;
      }

      .circle .big {
        cursor: pointer;
        height: 18px;
        width: 18px;
        padding: 5px;
        border: 2px solid $secondary;
      }

      span.big {
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

      span.small {
        border-radius: 50% 50% 50% 50%;
        display: block;
        height: 100%;
        transition: background 0.4s ease 0s;
        width: 100%;
      }

      input[type="radio"]:checked + label.circle span.small {
        background-color: $secondary;
      }
    }
  }
}

@media screen and (max-width: 430px) {
  .sort {
    &__container {
      gap: 0.5rem;
    }
  }
  label {
    font-size: 0.75rem;
  }
}
</style>
