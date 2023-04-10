<script>
import Slide from "./Slide.vue";

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
      sliderActive: false,
      slideDirection: "right",
    };
  },
  mounted() {
    this.setAutoplayInterval();
    this.sliderActive = true;
  },
  updated() {
    this.cats = this.items;
  },
  beforeDestroy() {
    clearInterval(this.autoplayInterval);
  },
  methods: {
    previous() {
      this.slideDirection = "left";
      this.cats = [
        {
          ...this.cats[this.cats.length - 2],
          id: this.cats[this.cats.length - 1].id,
        },
        ...this.cats.slice(0, -1),
      ];

      if (this.sliderActive) {
        clearInterval(this.autoplayInterval);
        this.setAutoplayInterval();
      }
    },
    next() {
      this.slideDirection = "right";
      this.cats = [
        ...this.cats.slice(1),
        { ...this.cats[1], id: this.cats[0].id },
      ];

      if (this.sliderActive) {
        clearInterval(this.autoplayInterval);
        this.setAutoplayInterval();
      }
    },
    handleSlideClick(name) {
      this.$emit("sliderClick", name);
    },
    handleMouseOver() {
      this.sliderActive = false;
      clearInterval(this.autoplayInterval);
    },
    handleMouseOut() {
      this.sliderActive = true;
      this.setAutoplayInterval();
    },
    setAutoplayInterval() {
      this.autoplayInterval = setInterval(() => {
        if (this.slideDirection === "right") {
          this.next();
        } else {
          this.previous();
        }
      }, 3000);
    },
  },
  components: { Slide },
};
</script>

<template>
  <div class="slider">
    <TransitionGroup
      id="list"
      name="swipe"
      tag="div"
      class="slider__transition_container"
    >
      <Slide
        v-for="(cat, index) in cats"
        :key="cat.id"
        :item="cat"
        :index="index"
        @openModal="handleSlideClick"
        @mouseOver="handleMouseOver"
        @mouseOut="handleMouseOut"
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

<style lang="scss">
@import "@/assets/style/_variables";

.slider {
  width: 100vw;
  height: 400px;
  display: grid;
  place-content: center;
  overflow: hidden;
  max-width: 1920px;
  position: relative;
  background-color: $text;

  &__transition_container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow: visible;
    background-color: grey;
    height: 350px;
    z-index: 10;

    .slide:nth-of-type(1),
    .slide:nth-of-type(5) {
      opacity: 0;
    }

    :nth-child(3) {
      height: 350px;
      width: 60vw;
      z-index: 15;

      p:hover {
        .slide__image {
          transform: scale(1.05);
          cursor: pointer;
        }
      }

      img {
        opacity: 1;

        &:hover {
          transform: scale(1.05);
          cursor: pointer;
        }
      }
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
    left: 17.5vw;
  }

  &__next {
    right: 17.5vw;
    transform: rotate(180deg);
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

.swipe-enter,
.swipe-leave-to {
  opacity: 0;
}

@media screen and (min-width: 1921px) {
  .slider {
    &__transition_container {
      :nth-child(3) {
        width: 1200px;
      }
    }

    &__previous {
      left: 315px;
    }

    &__next {
      right: 315px;
    }
  }

  .swipe-move {
    transition: all 0.1s;
  }
}

@media screen and (max-width: 1500px) {
  .slider {
    height: 350px;

    &__transition_container {
      height: 300px;

      :nth-child(3) {
        height: 300px;
      }
    }

    &__previous,
    &__next {
      top: 150px;
    }
  }
}

@media screen and (max-width: 780px) {
  .slider {
    height: 200px;

    &__transition_container {
      height: 200px;

      :nth-child(3) {
        height: 200px;
        width: 100vw;
      }
    }

    &__previous,
    &__next {
      top: 82px;
      width: 36px;
      height: 36px;
    }

    &__previous {
      left: 20px;
    }

    &__next {
      right: 20px;
    }
  }
}
</style>
