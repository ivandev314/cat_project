<script>
export default {
  name: "Modal",
  props: {
    closeOnBackdropClick: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    handleBackdropClick() {
      if (this.closeOnBackdropClick) {
        this.close();
      }
    },
  },
};
</script>

<template>
  <transition name="fade">
    <div class="modal-backdrop" @click="handleBackdropClick">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <button class="modal__close" @click="close">&times;</button>
        </div>
        <div class="modal__body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import "@/assets/style/_variables";

.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.modal {
  background-color: $light;
  border-radius: 1rem;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  max-height: 90%;
  overflow: auto;

  &__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0.5rem 1rem;
  }

  &__close {
    font-size: 2rem;
    color: $light-grey;
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  &__body {
    padding: 0 3rem 3rem;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    border-top: 1px solid $light-grey;
  }
}
</style>
