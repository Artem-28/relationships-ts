<template>
  <div class="relationships-box__point-delete">
    <img class="full-size" :src="require(`@/assets/icon/remove.png`)">
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "BoxPointerDeleteButton"
})
</script>

<style lang="scss">
.relationships-box__point-delete {
  width: 38px;
  height: 38px;
  top: -4px;
  left: -4px;
  position: absolute;
  cursor: pointer;
  img { display: none }
  &:hover {
    img { display: block }
  }
}

</style>
