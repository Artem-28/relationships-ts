<template>
  <div
      class="relationships-box absolute"
      @mousedown.self="start"
      @mouseup.self="stop"
      :style="{left, top}"
      ref="box"
  >
    <box-delete-button @click="$emit('deleteBox', boxData.id)" />
    <box-pointer
        v-for="(point, key) in boxData.pointer"
        :key="key"
        :data-point="point"
        :point-key="key"
        @click="$emit('click', {boxId: boxData.id, pointKey: key})"
    />

  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {mapMutations} from "vuex";
import BoxPointer from "@/components/RelationsipsBox/items/BoxPointer.vue";
import BoxDeleteButton from "@/components/RelationsipsBox/items/BoxDeleteButton.vue";
import {IRelationshipsBox} from "@/types/interfaces/Box/IRelationshipsBox";
import Coordination from "@/entities/Coordination/Coordination";

export default Vue.extend({
  name: "RelationshipsBox",
  components: {BoxDeleteButton, BoxPointer},
  props: {
    boxData: {
      type: Object as () => IRelationshipsBox
    }
  },
  data() {
    return {
      box: (this.$refs["box"] as HTMLElement),
      fieldCoordinates: {
        left: 0,
        top: 0,
      },
      left: '50px',
      top: '50px',
      shiftX: 0,
      shiftY: 0
    }
  },
  computed: {
    test2(){
      console.log(this.boxData)
      return ''
    }
  },
  methods: {
    ...mapMutations({
      updateCoordinationPointer: "Boxes/updateCoordinationPointer"
    }),
    start( event: any ) {
      this.shiftX = event.clientX - this.box.getBoundingClientRect().left;
      this.shiftY = event.clientY - this.box.getBoundingClientRect().top;
      this.box.ondragstart = () => false;
      this.moveAt(event);
      document.addEventListener('mousemove', this.onMouseMove);
    },

    onMouseMove(event : any) {
      this.moveAt(event);
    },

    moveAt(event : any) {
      this.calculateCoordsPoints()
      this.left = event.pageX - this.fieldCoordinates.left - this.shiftX + 'px';
      this.top = event.pageY - this.fieldCoordinates.top - this.shiftY + 'px';
    },

    stop() {
      document.removeEventListener('mousemove', this.onMouseMove);
      this.box.onmouseup = null;
    },

    calculateCoordsPoints(){
      const widthBox = this.box.getBoundingClientRect().width
      const coordsBox = {
        left: this.box.offsetLeft,
        top: this.box.offsetTop,
        right: this.box.offsetLeft + widthBox,
        bottom: this.box.offsetTop + widthBox
      }
      const coordination = {
        top: new Coordination(coordsBox.left + (widthBox / 2), coordsBox.top),
        right: new Coordination( coordsBox.right, coordsBox.top + (widthBox / 2)),
        bottom: new Coordination(coordsBox.left + (widthBox / 2), coordsBox.bottom),
        left: new Coordination(coordsBox.left, coordsBox.top + (widthBox / 2))
      }
      this.updateCoordinationPointer({boxId: this.boxData.id, coordination})
    },
    deleteBox(){

    }
  },

  mounted() {
    this.box = (this.$refs["box"] as HTMLElement)
    this.fieldCoordinates = ( this.box.parentNode as HTMLElement ).getBoundingClientRect()
    this.calculateCoordsPoints()
  }
})
</script>

<style lang="scss">
.relationships-box {
  z-index: 100;
  background: green;
  width: 100px;
  height: 100px;
  border-radius: 10px;
}

</style>
