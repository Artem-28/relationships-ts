<template>
  <div class="main-layout">
    <div class="main-layout__content full-size">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: "MainLayout"
})
</script>

<style lang="scss">
.main-layout {
  width: 100%;
  height: 100vh;
  &__content {
    box-sizing: border-box;
    padding: 50px calc(50% - 550px);
  }
}

</style>
