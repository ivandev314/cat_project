<script setup>
import StyledCheckbox from "@/components/SearchSortFilter/StyledCheckbox.vue";
</script>
<template>
  <div class="filter">
    <h3>Filter</h3>
    <div class="filter_list"><StyledCheckbox /></div>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  &_list {
    display: flex;
    gap: 20px;
  }
}
</style>
