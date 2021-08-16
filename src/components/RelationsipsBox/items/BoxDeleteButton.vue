<template>
  <div
      class="relationships-box__delete-btn"
      @click="$emit('click')"
  >
    <img class="full-size" :src="require(`@/assets/icon/remove.png`)">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BoxDeleteButton"
})
</script>

<style lang="scss">
.relationships-box__delete-btn {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  right: 0;
  top: 0;
  img { cursor: pointer; }
}

</style>
