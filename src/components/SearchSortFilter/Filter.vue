<script>
export default {
  data() {
    return {
      filter: {
        isYoungerThanSixMonths: false,
        isYoungerThanTwelveMonths: false,
        isBlack: false,
      },
    };
  },
  methods: {
    onFilterChanged(value) {
      this.$emit("filterChanged", value);
    },
  },
};
</script>
<template>
  <div class="filter">
    <h3>Filter</h3>
    <div class="filter_list">
      <div class="checkbox">
        <label>
          <input
            type="checkbox"
            name="color"
            v-model="filter.isYoungerThanSixMonths"
            @change="onFilterChanged(filter)"
          />
          younger than 6 months</label
        >
      </div>
      <div class="checkbox">
        <label>
          <input
            type="checkbox"
            name="color"
            v-model="filter.isYoungerThanTwelveMonths"
            @change="onFilterChanged(filter)"
          />
          younger than 12 months</label
        >
      </div>
      <div class="checkbox">
        <label>
          <input
            type="checkbox"
            name="color"
            v-model="filter.isBlack"
            @change="onFilterChanged(filter)"
          />
          black color</label
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &_list {
    display: flex;
    gap: 20px;
  }
}

.checkbox {
  input[type="checkbox"] {
    position: relative;
    background: none;
    cursor: pointer;
    vertical-align: text-top;
    height: 25px;
    border: 1px solid #000;
    width: 25px;
    opacity: 0.5;
    appearance: none;

    &:hover {
      background-color: red;
      opacity: 1;
    }

    &:checked {
      background-color: blue;
      opacity: 1;
    }

    &:before {
      content: "";
      position: absolute;
      right: 50%;
      top: 50%;
      width: 4px;
      height: 10px;
      border: solid #fff;
      border-width: 0 2px 2px 0;
      margin: -1px -1px 0 -1px;
      transform: rotate(45deg) translate(-50%, -50%);
      z-index: 2;
    }
  }
}
</style>
