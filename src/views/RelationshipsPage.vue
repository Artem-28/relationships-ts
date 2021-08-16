<template>
  <div class="relationships-page full-size">
    <div class="relationships-page__buttons">
      <app-buttons
          @click="createBox"
          text="Добавить Box"
      />
    </div>
    <div class="relationships-field full-size">
      <relationships-field-boxes />
      <relationships-field-line />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RelationshipsFieldBoxes from "@/components/RelationshipsFields/RelationshipsFieldBoxes.vue";
import RelationshipsFieldLine from "@/components/RelationshipsFields/RelationshipsFieldLine.vue";
import AppButtons from "@/components/Buttons/AppButtons.vue";
import {mapMutations} from "vuex";

export default Vue.extend({
  name: "RelationshipsPage",
  components: {
    AppButtons,
    RelationshipsFieldLine,
    RelationshipsFieldBoxes
  },
  methods: {
    ...mapMutations({
      createBox: "Boxes/createBox"
    })
  }
})

</script>

<style lang="scss">
.relationships-page {
  &__buttons {
    margin-bottom: 20px;
  }
}
.relationships-field {
  position: relative;
  max-height: 700px;
}

</style>
