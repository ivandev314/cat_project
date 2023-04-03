<script>
export default {
  name: "PreviewModal",
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
  },
};
</script>

<template>
  <Modal :is-open="true" @close="closeModal">
    <template v-slot:header>
      <h2>Cat 23</h2>
    </template>
    <img src="@/assets/images/cat.jpg" alt="cat" class="card__image" />
    <p>color</p>
    <p>age</p>
  </Modal>
</template>

<style lang="scss" scoped></style>
