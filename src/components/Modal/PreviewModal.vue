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
  data() {
    return {
      publicPath: import.meta.env.BASE_URL,
    };
  },
  components: { Cta },
};
</script>

<template>
  <div class="preview_modal">
    <img
      :src="`${publicPath}/images/${activeItem?.name}.jpg`"
      alt="cat"
      class="preview_modal__img"
    />
    <div class="preview_modal__info">
      <div class="preview_modal__info__top">
        <h2>{{ activeItem?.name }}</h2>
        <p>{{ activeItem?.color }} / {{ activeItem?.age }} months</p>
      </div>
      <Cta :id="activeItem?.id" @catAdopted="onAdoptClick" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.preview_modal {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__img {
    border-radius: $border-radius-largest;
    height: 50vh;
  }
}
</style>
