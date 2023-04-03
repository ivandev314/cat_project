<script>
export default {
  name: "ConfirmationModal",
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

<template>
  <Modal
    :is-open="condirmationActive"
    @close="closeModal"
    closeOnBackdropClick="false"
  >
    <template v-slot:header>
      <h2>Are you sure you wannt to adopt this cat?</h2>
    </template>
    <button>Yes</button>
    <button>No</button>
  </Modal>
</template>

<style lang="scss" scoped></style>
