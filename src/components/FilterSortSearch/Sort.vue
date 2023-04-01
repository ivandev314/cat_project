<script setup></script>

<template>
  <div class="sort">
    <div>
      <label for="sort">Sort by:</label>
      <div>
        <input type="radio" id="name" name="sort" value="name" />
        <label for="name">Name</label>
        <input type="radio" id="age" name="sort" value="age" />
        <label for="age">Age</label>
      </div>
    </div>
    <div>
      <label for="order">Order:</label>
      <div>
        <input type="radio" id="asc" name="order" value="asc" />
        <label for="asc">Ascending</label>
        <input type="radio" id="desc" name="order" value="desc" />
        <label for="desc">Descending</label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sort {
  display: flex;
  gap: 20px;
}
</style>
