<template>
  <main-layout>
    <relationships-page />
  </main-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import MainLayout from "@/layouts/MainLayout.vue";
import RelationshipsPage from "@/views/RelationshipsPage.vue";

export default Vue.extend({
  name: 'App',
  components: {
    RelationshipsPage,
    MainLayout,
  }
});
</script>

<style lang="scss">
</style>
