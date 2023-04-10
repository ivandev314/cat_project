<template>
  <div
    class="slide"
    @click="handleClick"
    @mouseover="handleMouseOver"
    @mouseout="handleMouseOut"
  >
    <img
      :src="`${publicPath}/images/${item.name.toLowerCase()}.jpg`"
      :alt="`cat-${item.name}`"
      class="slide__image"
      :data-content="item.name"
    />
    <p class="slide__text">{{ item.name }}</p>
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
  methods: {
    handleClick() {
      if (this.index === 2) {
        this.$emit("openModal", this.item.name);
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
  data() {
    return {
      publicPath: import.meta.env.BASE_URL,
    };
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
    position: relative;
    bottom: 6rem;
    left: 3rem;
    color: $text;
    font-size: 3rem;
    z-index: 20;
    background-color: rgba($color: #fff, $alpha: 0.4);
    border-radius: $border-radius-largest;
    padding: 0.2rem 1rem;
    display: inline;
    pointer-events: none;
  }
}

@media screen and (min-width: 1921px) {
  .slide {
    width: 360px;
  }
}

@media screen and (max-width: 1500px) {
  .slide {
    height: 300px;
    &__image {
      height: 300px;
    }
    &__text {
      font-size: 3rem;
    }
  }
}

@media screen and (max-width: 1280px) {
  .slide {
    &__text {
      font-size: 2.5rem;
      bottom: 5rem;
      left: 2rem;
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
      left: 4rem;
      bottom: 4rem;
      font-size: 2rem;
    }
  }
}
</style>
