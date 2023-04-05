<template>
  <div
    class="slide"
    @click="handleClick"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
  >
    <img
      :src="`${imageUrl}/${item.name}.jpg`"
      :alt="`cat-${item.name}`"
      class="slide__image"
      :data-content="item.name"
    />
    <p class="slide__text">{{ capitalizeFirstLetter(item.name) }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  computed: {
    capitalizeFirstLetter(string) {
      return (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
    },
  },
  methods: {
    handleClick() {
      if (this.index === 2) {
        this.$emit("openModal", this.index);
      }
    },
    handleMouseOver() {
      if (this.index === 2) {
        this.$emit("mouseOver");
      }
    },
    handleMouseOut() {
      if (this.index === 2) {
        this.$emit("mouseOut");
      }
    },
  },
  setup() {
    const imageUrl = new URL("./../../assets/images/", import.meta.url).href;
    return { imageUrl };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.slide {
  width: 40vw;
  height: 350px;
  z-index: 10;
  position: relative;
  user-select: none;

  &__image {
    width: 100%;
    height: 350px;
    object-fit: cover;
    position: relative;
    transition: all 0.3s ease-out;
    opacity: 0.3;
    -webkit-user-drag: none;

    &:first-child {
      z-index: 5;
    }

    &:last-child {
      z-index: 5;
    }

    @media screen and (min-width: 1921px) {
      width: unset;
    }
  }

  &__text {
    position: absolute;
    bottom: 2rem;
    left: 5rem;
    color: $primary;
    font-size: 5rem;
    z-index: 20;
  }
}
</style>
