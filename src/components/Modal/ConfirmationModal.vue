<script>
export default {
  name: "ConfirmationModal",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    activeItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onYesClick() {
      this.$emit("successAdopt");
    },
    onNoClick() {
      this.$emit("cancelAdopt");
    },
  },
};
</script>

<template>
  <div class="confirmation_modal">
    <h2>Are you sure you wannt to adopt {{ activeItem.name }} ?</h2>
    <div class="confirmation_modal__buttons">
      <button @click="onYesClick" class="confirmation_modal__buttons__yes">
        Yes
      </button>
      <button @click="onNoClick" class="confirmation_modal__buttons__no">
        No
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.confirmation_modal {
  display: flex;
  flex-direction: column;
  gap: 2rem;

  &__buttons {
    display: flex;
    gap: 2rem;
    justify-content: flex-end;

    &__yes,
    &__no {
      border: none;
      padding: 0.5rem 2rem;
      border-radius: $border-radius-normal;
      font-size: 1rem;

      &:hover {
        cursor: pointer;
        box-shadow: 0 0 5px 2px $primary;
      }
    }

    &__yes {
      background-color: $primary;
      color: $light;
    }
  }
}
</style>
