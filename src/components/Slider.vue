<template>
  <div id="app">
    <div id="slider">
      <div class="slide left_out">
        <h1>{{ left_out.name }}</h1>
        <img :src="left_out.url" class="slide__image" />
      </div>
      <div class="slide left">
        <h1>{{ left.name }}</h1>
        <img :src="left.url" class="slide__image" />
        <img
          class="control_left"
          @click="handlePrev"
          src="@/assets/icons/arrow.svg"
        />
      </div>
      <div class="slide actual" @click="onSliderClick(actual)">
        <h1>{{ actual.name }}</h1>
        <img :src="actual.url" class="slide__image" />
      </div>
      <div class="slide right">
        <h1>{{ right.name }}</h1>
        <img :src="right.url" class="slide__image" />
        <img
          class="control_right"
          @click="handleNext"
          src="@/assets/icons/arrow.svg"
        />
      </div>
      <div class="slide right_out">
        <h1>{{ right_out.name }}</h1>
        <img :src="right_out.url" class="slide__image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      test: [
        {
          name: "test1",
          id: 6,
          age: 23,
          color: "red",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
        },
        {
          name: "test2",
          id: 7,
          age: 23,
          color: "red",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
        },
        {
          name: "test3",
          id: 9,
          age: 23,
          color: "red",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
        },
        {
          name: "test4",
          id: 11,
          age: 23,
          color: "red",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/typewriter.jpg",
        },
      ],
      step: 0,
    };
  },
  computed: {
    left_out: function () {
      if (this.step - 2 < 0) {
        return this.test[this.test.length - 2];
      } else {
        return this.test[this.step - 2];
      }
    },
    left: function () {
      if (this.step - 1 < 0) {
        return this.test[this.test.length - 1];
      } else {
        return this.test[this.step - 1];
      }
    },
    actual: function () {
      return this.test[this.step];
    },
    right: function () {
      if (this.step + 1 > this.test.length - 1) {
        return this.test[0];
      } else {
        return this.test[this.step + 1];
      }
    },
    right_out: function () {
      if (this.step + 2 === this.test.length) {
        return this.test[0];
      } else if (this.step + 2 > this.test.length - 1) {
        return this.test[1];
      } else {
        return this.test[this.step + 2];
      }
    },
  },

  methods: {
    onSliderClick(value) {
      this.$emit("sliderClick", value);
    },
    handleNext: function () {
      let test = document.getElementsByClassName("slide");
      for (let i = 0; i < test.length; i++) {
        test[i].classList.add("goLeft");
      }

      setTimeout(() => {
        if (this.step === this.test.length - 1) this.step = 0;
        else this.step++;

        for (let i = 0; i < test.length; i++) {
          test[i].classList.remove("goLeft");
        }
      }, 500);
    },
    handlePrev: function () {
      let test = document.getElementsByClassName("slide");
      for (let i = 0; i < test.length; i++) {
        test[i].classList.add("goRight");
      }

      setTimeout(() => {
        if (this.step === 0) this.step = this.test.length - 1;
        else this.step--;

        for (let i = 0; i < test.length; i++) {
          test[i].classList.remove("goRight");
        }
      }, 500);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/style/_variables";

#slider {
  display: flex;
  width: 100%;
  height: 400px;
  overflow: hidden;

  .slide {
    display: flex;
    align-items: center;

    .slide__image {
      height: 90%;
      opacity: 0.5;
      object-fit: cover;
      object-position: top;
      width: 100%;
      width: 60vw;
    }
  }

  div {
    &.left_out {
      transform: translateX(-109vw);
    }
    &.left {
      transform: translateX(-109vw);
      position: relative;
    }
    &.actual {
      transform: translateX(-109vw);

      .slide__image {
        opacity: 1;
        transition: 0.2s ease-out;

        &:hover {
          transform: scale(1.05);
          cursor: pointer;
        }
      }
    }
    &.right {
      transform: translateX(-109vw);
      position: relative;
    }
    &.right_out {
      transform: translateX(-109vw);
    }

    &.goLeft {
      animation: slideLeft 0.5s forwards;
    }

    @keyframes slideLeft {
      from {
        transform: translateX(-111vw);
      }
      to {
        transform: translateX(-171vw);
      }
    }

    &.goRight {
      animation: slideRight 0.5s forwards;
    }

    @keyframes slideRight {
      from {
        transform: translateX(-109vw);
      }
      to {
        transform: translateX(-47vw);
      }
    }
    margin: 0 1vw;
    max-height: 100vh;
  }
}

h1 {
  position: absolute;
  color: $primary;
  bottom: 20%;
  left: 10%;
  font-size: 45px;
  z-index: 2;
  padding: 10px;
  border-bottom: 5px solid $primary;
  border-top: 5px solid $primary;
  user-select: none;
  cursor: auto;
}

.control_left,
.control_right {
  position: absolute;
  height: 50px;
  top: calc(50% - 25px);
  cursor: pointer;
}

.control_left {
  right: 0;
}

.control_right {
  left: 0;
  transform: rotate(180deg);
}
</style>
