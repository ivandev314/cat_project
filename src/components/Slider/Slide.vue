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
    z-index: 2;

    &:first-child {
      z-index: 1;
    }

    &:last-child {
      z-index: 1;
    }
  }

  &__text {
    position: absolute;
    bottom: 2rem;
    left: 5rem;
    color: $primary;
    font-size: 5rem;
    z-index: 20;
    background-color: rgba($color: #fff, $alpha: 0.4);
    border-radius: $border-radius-largest;
    padding: 0.2rem 1rem;
  }
}

@media screen and (min-width: 1921px) {
  .slide {
    width: 33%;

    &__image {
      &:first-child {
        z-index: 5;
      }

      &:last-child {
        z-index: 5;
      }
    }
  }
}

@media screen and (max-width: 1500px) {
  .slide {
    height: 300px;
    &__image {
      height: 300px;
    }
    &__text {
      font-size: 4rem;
    }
  }
}

@media screen and (max-width: 780px) {
  .slide {
    height: 200px;

    &__image {
      height: 200px;
    }

    &__text {
      left: 2rem;
      bottom: 1rem;
      font-size: 3rem;
    }
  }
}
</style>
