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

  input {
    height: 40px;
    padding: 15px;
    border: 1px solid $secondary;
    font-size: 16px;
    border-radius: 10px;
    width: 100%;

    &:focus {
      border: 1px solid $text;
      outline: none;
    }

    &::placeholder {
      color: $light-grey;
    }
  }

  img {
    position: absolute;
    right: 5px;
    top: 10px;
    height: 20px;
    width: 20px;
  }
}
</style>
