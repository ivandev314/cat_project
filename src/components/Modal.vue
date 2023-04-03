<template>
  <transition name="fade">
    <div class="backdrop" v-show="isOpen" @click="close">
      <div class="modal" @click.stop>
        <div class="modal__header">
          <h2>Cat 23</h2>
          <button class="modal__header__close" @click="close">&times;</button>
        </div>
        <div class="modal__body">
          <img
            src="@/assets/images/cat.jpg"
            alt="cat"
            class="modal__body__img"
          />
          <p>color</p>
          <p>age</p>
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
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss">
.backdrop {
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

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 1rem;
    border-top: 1px solid #ddd;

    &__close {
      font-size: 2rem;
      color: #ccc;
      cursor: pointer;
      border: none;
      background-color: transparent;
    }
  }

  &__body {
    padding: 1rem;

    &__img {
      border-radius: 16px;
    }
  }
}
</style>
