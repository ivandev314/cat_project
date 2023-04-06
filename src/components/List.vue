<script>
import ShowMore from "./Buttons/ShowMore.vue";
import Card from "./Card.vue";

export default {
  components: {
    Card,
    ShowMore,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    moreItemsToShow: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    onShowMore() {
      this.$emit("itemsShownChanged", 20);
    },
    onAdoptClick(value) {
      this.$emit("catAdopted", value);
    },
  },
};
</script>

<template>
  <div class="list">
    <ul v-if="items.length" class="list__items">
      <Card
        v-for="item in items"
        :key="item.id"
        :name="item.name"
        :color="item.color"
        :age="item.age"
        :id="item.id"
        @catAdopted="onAdoptClick"
      />
    </ul>
    <p v-else class="list__no_items">No items found.</p>
    <ShowMore v-if="moreItemsToShow" @click="onShowMore" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";

.list {
  display: flex;
  flex-direction: column;

  &__items {
    padding: 50px 160px;
    display: grid;
    grid-template-columns: repeat(5, minmax(200px, 1fr));
    gap: 2rem;
  }

  &__no_items {
    text-align: center;
    font-size: 1.5rem;
    margin-top: 5rem;
    width: 100%;
  }
}

@media screen and (max-width: 1600px) {
  .list {
    &__items {
      grid-template-columns: repeat(4, minmax(200px, 1fr));
    }
  }
}

@media screen and (max-width: 1280px) {
  .list {
    &__items {
      padding: 50px 100px;
      gap: 1rem;
      grid-template-columns: repeat(3, minmax(150px, 1fr));
    }
  }
}

@media screen and (max-width: 1024px) {
  .list {
    &__items {
      padding: 50px 50px;
    }
  }
}

@media screen and (max-width: 900px) {
  .list {
    &__items {
      grid-template-columns: repeat(2, minmax(150px, 1fr));
    }
  }
}

@media screen and (max-width: 768px) {
  .list {
    &__items {
      padding: 50px 30px;
    }
  }
}

@media screen and (max-width: 550px) {
  .list {
    &__items {
      grid-template-columns: 1fr;
    }
  }
}
</style>
