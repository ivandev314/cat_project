<script setup></script>

<template>
  <div class="search">
    <input type="text" placeholder="Search" />
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/icons/search.svg"
      width="125"
      height="125"
    />
  </div>
</template>

<style lang="scss" scoped>
.search {
  position: relative;

  input {
    height: 30px;
    padding: 10px;
    border: none;
  }

  img {
    position: absolute;
    right: 5px;
    top: 5px;
    height: 20px;
    width: 20px;
  }
}
</style>
