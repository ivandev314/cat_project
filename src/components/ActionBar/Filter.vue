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
    <h4>Show only</h4>
    <div class="filter_list">
      <div class="checkbox">
        <label>
          <input
            type="checkbox"
            v-model="filter.isYoungerThanSixMonths"
            @change="onFilterChanged(filter)"
          />
          &lt; 6 months</label
        >
      </div>
      <div class="checkbox">
        <label>
          <input
            type="checkbox"
            v-model="filter.isYoungerThanTwelveMonths"
            @change="onFilterChanged(filter)"
          />
          &lt; 12 months</label
        >
      </div>
      <div class="checkbox">
        <label>
          <input
            type="checkbox"
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
@import "@/assets/style/_variables";
.filter {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 0.75rem;

  &_list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
}

label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.checkbox {
  input[type="checkbox"] {
    position: relative;
    background: none;
    cursor: pointer;
    vertical-align: text-top;
    height: 1rem;
    border: 2px solid $primary;
    width: 1rem;
    opacity: 0.5;
    appearance: none;
    border-radius: $border-radius-small;

    &:hover {
      background-color: $primary;
      opacity: 1;
    }

    &:checked {
      background-color: $secondary;
      opacity: 1;

      &::before {
        content: "";
        position: absolute;
        right: 50%;
        top: 50%;
        width: 4px;
        height: 10px;
        border: solid $light;
        border-width: 0 2px 2px 0;
        margin: -1px -1px 0 -1px;
        transform: rotate(45deg) translate(-50%, -50%);
        z-index: 2;
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .filter_list {
    flex-direction: row;
  }
}

@media screen and (max-width: 768px) {
  .filter_list {
    flex-direction: column;
  }
}

@media screen and (max-width: 430px) {
  .filter_list {
    label {
      font-size: 0.75rem;
    }
  }
}
</style>
