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
  <div class="list_bla">
    <ul v-if="items.length" class="list">
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
    <p v-else class="no_items">No items found.</p>
    <ShowMore v-if="moreItemsToShow" @click="onShowMore" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.list {
  padding: $main-component-padding;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 40px;
}

.list_bla {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.no_items {
  text-align: center;
  font-size: 24px;
  margin-top: 100px;
  width: 100%;
}
</style>
