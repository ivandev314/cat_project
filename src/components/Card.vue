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
  setup() {
    const imageUrl = new URL("./../assets/images", import.meta.url).href;
    return { imageUrl };
  },
};
</script>

<template>
  <li class="card">
    <img
      :src="`${imageUrl}/${name}.jpg`"
      :alt="`cat-${name}`"
      class="card__image"
    />
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
  background-color: $light;
  border-radius: $border-radius-large;
  box-shadow: -2px 2px 8px 0px $text;
  -webkit-box-shadow: -2px 2px 8px 0px $text;
  -moz-box-shadow: -2px 2px 8px 0px $text;

  &__image {
    width: 100%;
    object-fit: cover;
    border-radius: $border-radius-large $border-radius-large 0 0;
    border-bottom: 0.75rem solid $secondary;
    height: 15rem;
  }

  &__info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.75rem 1.25rem 1.25rem;

    &-top {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
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
