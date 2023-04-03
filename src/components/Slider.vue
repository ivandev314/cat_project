<template>
  <div id="app">
    <div id="slider">
      <div class="slide left_out">
        <h1>{{ left_out.name }}</h1>
        <img :src="left_out.url" />
      </div>
      <div class="slide left">
        <h1>{{ left.name }}</h1>
        <img :src="left.url" />
      </div>
      <div class="slide actual">
        <h1>{{ actual.name }}</h1>
        <img :src="actual.url" />
      </div>
      <div class="slide right">
        <h1>{{ right.name }}</h1>
        <img :src="right.url" />
      </div>
      <div class="slide right_out">
        <h1>{{ right_out.name }}</h1>
        <img :src="right_out.url" />
      </div>
    </div>
    <img
      class="control_left"
      @click="handlePrev"
      src="@/assets/icons/arrow.svg"
    />
    <img
      class="control_right"
      @click="handleNext"
      src="@/assets/icons/arrow.svg"
    />
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
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/fashion.jpg",
        },
        {
          name: "test2",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/forest.jpg",
        },
        {
          name: "test3",
          url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/guitar.jpg",
        },
        {
          name: "test4",
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
      }, 200);
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
      }, 200);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#slider {
  display: flex;
  width: 100%;
  height: 45vh;
  overflow: hidden;

  .slide {
    display: flex;
    align-items: center;
    img {
      opacity: 0.5;
      height: 90%;
      object-fit: cover;
      object-position: top;
    }
  }

  div {
    &.left_out {
      transform: translateX(-109vw);
    }
    &.left {
      transform: translateX(-109vw);
    }
    &.actual {
      transform: translateX(-109vw);

      img {
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
    }
    &.right_out {
      transform: translateX(-109vw);
    }

    &.goLeft {
      animation: slideLeft 0.2s forwards;
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
      animation: slideRight 0.2s forwards;
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

    img {
      width: 100%;
      width: 60vw;
    }
  }
}

h1 {
  text-align: center;
  display: none;
}

.control_left {
  position: absolute;
  top: 170px;
  left: 11vw;
  transform: translateY(-50%);
  cursor: pointer;
  height: 50px;
}

.control_right {
  position: absolute;
  top: 150px;
  right: 19vw;
  transform: translateY(-50%);
  cursor: pointer;
  transform: rotate(180deg);
  height: 50px;
}
</style>
