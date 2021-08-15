<template>
  <div
      class="relationships-box__point"
      :class="`point-${pointKey} point-${dataPoint.relationship.status}`"
      @click="$emit('click')"
  >
    <box-pointer-delete-button v-if="dataPoint.getStatus() === 'ready'"/>
    <loader-box-pointer v-if="dataPoint.getStatus() === 'wait'"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {IBoxPointer} from "@/interfaces/relationshipsBox/IRelationshipsBox";
import LoaderBoxPointer from "@/components/RelationsipsBox/items/LoaderBoxPointer.vue";
import BoxPointerDeleteButton from "@/components/RelationsipsBox/items/BoxPointerDeleteButton.vue";

export default Vue.extend({
  name: "BoxPointer",
  components: {BoxPointerDeleteButton, LoaderBoxPointer},
  props: {
    dataPoint: {
      type: Object as () => IBoxPointer
    },
    pointKey: String,
  },
})
</script>

<style lang="scss">
.relationships-box__point {
  z-index: 2;
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 4px solid #fff;
  cursor: pointer;
}
.point-empty {
  background: cornflowerblue;
}
.point-wait {
  background: rgba(127, 213, 245, 1);
  border-color: rgba(127, 213, 245, 1);
}
.point-ready {
  background: green;
}
.point-top {
  left: 31px;
  top: -19px
}
.point-right {
  top: 31px;
  right: -19px;
}
.point-bottom {
  top: 81px;
  left: 31px;
}
.point-left {
  top: 31px;
  left: -19px;
}

</style>
