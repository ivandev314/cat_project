<script setup></script>
<template>
  <div class="filter">
    <h3>Filter</h3>
    <div class="filter_list">
      <div>
        <input type="checkbox" id="color" name="color" value="color" />
        <label for="color">6 months</label>
      </div>
      <div>
        <input type="checkbox" id="age" name="age" value="age" />
        <label for="age">12 months</label>
      </div>
      <div>
        <input type="checkbox" id="age" name="age" value="age" />
        <label for="age">only black color</label>
      </div>
    </div>
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
