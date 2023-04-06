<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onAdoptClick(value) {
      this.$emit("catAdopted", value);
    },
  },
};
</script>

<template>
  <button class="cta" @click="onAdoptClick(id)">Adopt me</button>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.cta {
  background-color: $secondary;
  color: white;
  border: none;
  border-radius: $border-radius-large;
  padding: 0.5rem 1rem;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: $primary;
  }
}
</style>
