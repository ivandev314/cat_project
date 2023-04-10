<script>
export default {
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    onSearchTermChanged() {
      this.$emit("searchTermChanged", this.inputValue);
    },
  },
};
</script>

<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search"
      v-model="inputValue"
      @input="onSearchTermChanged"
      class="search__input"
    />
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/icons/search.svg"
      width="125"
      height="125"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.search {
  position: relative;
  flex: 1;

  &__input {
    padding: 1rem 2rem 1rem 1rem;
    border: 1px solid $secondary;
    font-size: 1rem;
    border-radius: $border-radius-normal;
    width: 100%;

    &:hover,
    &:focus {
      box-shadow: 0 0 4px 0px $secondary;
      outline: none;
    }

    &::placeholder {
      color: $grey;
    }
  }

  img {
    position: absolute;
    right: 0.5rem;
    top: 1rem;
    height: 1.5rem;
    width: 1.5rem;
  }
}

@media screen and (max-width: 430px) {
  .search {
    &__input {
      padding: 0.5rem;
      font-size: 0.75rem;
    }

    img {
      width: 1rem;
      height: 1rem;
      top: 0.6rem;
    }
  }
}
</style>
