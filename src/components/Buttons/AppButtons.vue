<template>
  <button @click="$emit('click')">{{text}}</button>
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

<style scoped>

</style>
