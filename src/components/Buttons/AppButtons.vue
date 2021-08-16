<template>
  <button class="app-buttons" @click="$emit('click')">{{text}}</button>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "AppButtons",
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss">
.app-buttons {
  width: 150px;
  height: 50px;
  font-size: 20px;
  background: none;
  border: 2px solid #0f07eb;
  cursor: pointer;
  color: #0f07eb;
  transition: all 0.5s;
  &:hover {
    color: white;
    background: #0f07eb;
  }
}

</style>
