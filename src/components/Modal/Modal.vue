<template>
  <transition name="fade">
    <div class="modal-backdrop" v-show="isOpen" @click="handleBackdropClick">
      <div class="modal" @click.stop>
        <div class="modal-header">
          <slot name="header"></slot>
          <button class="modal-close" @click="close">&times;</button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
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

<style lang="scss">
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
}

.modal {
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
}

.modal-header .modal-close {
  font-size: 2rem;
  color: #ccc;
  cursor: pointer;
  border: none;
  background-color: transparent;
}

.modal-body {
  padding: 1rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #ddd;
}
</style>
