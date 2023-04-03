<script>
import Cta from "../Buttons/Cta.vue";

export default {
  name: "PreviewModal",
  props: {
    activeItem: {
      type: Object,
      required: true,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    onAdoptClick(value) {
      this.$emit("catAdopted", value);
    },
  },
  components: { Cta },
};
</script>

<template>
  <div class="preview_modal">
    <img src="@/assets/images/cat.jpg" alt="cat" class="preview_modal__img" />
    <div class="preview_modal__info">
      <div>
        <h2>{{ activeItem?.name }}</h2>
        <p>{{ activeItem?.color }} / {{ activeItem?.age }} months</p>
      </div>
      <Cta :id="activeItem?.id" @catAdopted="onAdoptClick" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.preview_modal {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__img {
    border-radius: 20px;
    height: 50vh;
  }
}
</style>
