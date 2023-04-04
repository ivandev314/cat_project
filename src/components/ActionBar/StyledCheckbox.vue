<script setup></script>

<template>
  <div class="checkbox">
    <input type="checkbox" id="color" name="color" value="color" />
    <label for="color">6 months</label>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/style/_variables";
.checkbox {
  input[type="checkbox"] {
    position: relative;
    background: none;
    cursor: pointer;
    vertical-align: text-top;
    height: 20px;
    width: 20px;
    opacity: 0.5;
    appearance: none;

    &:hover {
      background-color: $secondary;
      opacity: 1;
    }

    &:checked {
      background-color: $secondary;
      opacity: 1;
    }

    &:before {
      content: "";
      position: absolute;
      right: 50%;
      top: 50%;
      width: 4px;
      height: 10px;
      border: solid $light;
      border-width: 0 2px 2px 0;
      margin: -1px -1px 0 -1px;
      transform: rotate(45deg) translate(-50%, -50%);
      z-index: 2;
    }
  }
}
</style>
