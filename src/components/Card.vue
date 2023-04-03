<script>
import Cta from "./Buttons/Cta.vue";

export default {
  components: {
    Cta,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
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
  <li class="card">
    <img :src="`/images/${name}.jpeg`" alt="cat" class="card__image" />
    <div class="card__info">
      <div class="card__info-top">
        <h3>{{ name }}</h3>
        <p>{{ color }} / {{ age }} months old</p>
      </div>
      <Cta :id="id" @catAdopted="onAdoptClick" />
    </div>
  </li>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.card {
  flex: 0 1 285px;
  background-color: white;
  border-radius: 20px;
  box-shadow: -2px 2px 8px 0px $text;
  -webkit-box-shadow: -2px 2px 8px 0px $text;
  -moz-box-shadow: -2px 2px 8px 0px $text;

  &__image {
    width: 100%;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
    border-bottom: 10px solid $secondary;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 10px 20px 20px;

    &-top {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    h3 {
      color: $primary;
      font-weight: 700;
    }

    p {
      color: $text;
      font-weight: 300;
    }
  }
}
</style>
