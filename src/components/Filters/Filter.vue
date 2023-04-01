<script setup></script>
<template>
  <div class="filter">
    <div>
      <input type="checkbox" id="color" name="color" value="color" />
      <label for="color">Color</label>
    </div>
    <div>
      <input type="checkbox" id="age" name="age" value="age" />
      <label for="age">Age</label>
    </div>
    <div>
      <input type="checkbox" id="age" name="age" value="age" />
      <label for="age">Age</label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.filter {
  display: flex;
  gap: 20px;
}
</style>
