<template>
  <div class="slider">
    <TransitionGroup
      id="list"
      name="swipe"
      tag="div"
      class="slider__transition_container"
    >
      <img
        v-for="cat in cats"
        :key="cat.id"
        :src="`${imageUrl}/${cat.name}.jpg`"
        :alt="`cat-${cat.name}`"
        class="slider__image"
      />
    </TransitionGroup>
    <button class="slider__previous" @click="previous">
      <img class="slider__previous_img" src="@/assets/icons/arrow.svg" />
    </button>
    <button class="slider__next" @click="next">
      <img class="slider__next_img" src="@/assets/icons/arrow.svg" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      cats: this.items,
      autoplayInterval: null,
    };
  },
  mounted() {
    this.autoplayInterval = setInterval(() => {
      this.next();
    }, 3000);
  },
  beforeDestroy() {
    clearInterval(this.autoplayInterval);
  },
  methods: {
    previous() {
      const lastSlide = this.cats.pop();
      this.cats = [lastSlide].concat(this.cats);
    },
    next() {
      const firstPicture = this.cats.shift();
      this.cats = this.cats.concat(firstPicture);
    },
  },
  setup() {
    const imageUrl = new URL("./../assets/images/", import.meta.url).href;
    return { imageUrl };
  },
};
</script>

<style lang="scss">
.slider {
  width: 100vw;
  height: 400px;
  display: grid;
  place-content: center;
  overflow: hidden;
  max-width: 1920px;
  position: relative;

  &__transition_container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: visible;
    background-color: grey;

    :nth-child(3) {
      height: 512px;
      width: 60vw;
      opacity: 1;

      @media screen and (min-width: 1921px) {
        width: 80%;
      }
    }
  }

  &__image {
    width: 40vw;
    height: 400px;
    z-index: 10;
    pointer-events: none;
    opacity: 0.5;

    &:first-child {
      z-index: 5;
    }

    &:last-child {
      z-index: 5;
    }

    @media screen and (min-width: 1921px) {
      width: 50%;
    }
  }

  &__previous,
  &__next {
    position: absolute;
    top: 200px;
    z-index: 15;
    width: 48px;
    height: 48px;
    padding: 12px;
    border-radius: 50%;
    border: none;
    background: white;
    cursor: pointer;
    opacity: 0.5;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }

  &__previous {
    left: 17vw;

    @media screen and (min-width: 1920px) {
      left: 20%;
    }
  }

  &__next {
    right: 17vw;
    transform: rotate(180deg);

    @media screen and (min-width: 1920px) {
      right: 20%;
    }
  }

  &__previous_img,
  &__next_img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.swipe-move {
  transition: all 0.2s;
}
</style>
