<template>
  <svg class="relationships-field__line full-size absolute">
    <line
        v-for="(coords, key) in coordinationLine"
        :key="key"
        stroke="black"
        :x1="getBoxById(coords.firstConnect.boxId).getPointerByType(coords.firstConnect.pointKey).coordinates.x"
        :x2="getBoxById(coords.secondConnect.boxId).getPointerByType(coords.secondConnect.pointKey).coordinates.x"
        :y1="getBoxById(coords.firstConnect.boxId).getPointerByType(coords.firstConnect.pointKey).coordinates.y"
        :y2="getBoxById(coords.secondConnect.boxId).getPointerByType(coords.secondConnect.pointKey).coordinates.y"
    />
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
import {mapGetters} from "vuex";

export default Vue.extend({
  name: "RelationshipsFieldLine",
  computed: {
    ...mapGetters({
      coordinationLine: "Relationships/coordinationLine",
      getBoxById: "Boxes/getBoxById"
    }),
  }
})
</script>

