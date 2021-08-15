<template>
  <div class="relationships-field__boxes full-size">
    <relationships-box
        v-for="box in boxes"
        :key="box.id"
        :box-data="box"
        @click="updateConnection"
        @deleteBox="deleteBoxAndRelationships"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import RelationshipsBox from "@/components/RelationsipsBox/RelationshipsBox.vue";
import {mapGetters, mapMutations} from "vuex";
import {IConnect} from "@/interfaces/Relationships/IConnect";
import {generateKeyForMap} from "@/helpers/common";

export default Vue.extend({
  name: "RelationshipsFieldBoxes",
  components: {RelationshipsBox},
  computed: {
    ...mapGetters({
      boxes: "Boxes/boxes",
      getBoxById: "Boxes/getBoxById",
      isEmptyConnection: "Relationships/isEmptyConnection",
      firstConnect: "Relationships/firstConnect",
      isReadyConnection: "Relationships/isReadyConnection",
      connectionData: "Relationships/connectionData"
    })
  },
  methods: {
    ...mapMutations({
      deleteConnectionOfBoxes: "Boxes/deleteConnectionOfBoxes",
      addedConnect: "Relationships/addedConnect",
      updatePointStatus: "Boxes/updatePointStatus",
      replaceConnect: "Relationships/replaceConnect",
      connectionOfBoxes: "Boxes/connectionOfBoxes",
      addedCoordinationLine: "Relationships/addedCoordinationLine",
      deleteCoordinationLine: "Relationships/deleteCoordinationLine",
      clearConnections: "Relationships/clearConnections",
      deleteBox: "Boxes/deleteBox"
    }),
    deleteBoxAndRelationships(boxId: number) {
      const box = this.getBoxById(boxId)
      Object.keys(box.pointer).forEach(pointKey => {
        const point = box.getPointerByType(pointKey)
        const pointStatus = point.getStatus()

        if (pointStatus === "ready") {
          const connectId = point.getConnectId()
          this.deleteCoordinationLine(connectId)
          this.deleteConnectionOfBoxes(point.relationship)
        }

        if (pointStatus === 'wait') {
          this.clearConnections()
        }
      })
      this.deleteBox(boxId)
    },
    updateConnection(connect: IConnect){
      const currentBox = this.getBoxById(connect.boxId)
      const currentPoint = currentBox.getPointerByType(connect.pointKey)

      if(currentPoint.getStatus() === 'ready') {
        const connectId = currentPoint.getConnectId()
        this.deleteCoordinationLine(connectId)
        this.deleteConnectionOfBoxes(currentPoint.relationship)
        if(this.isEmptyConnection) return;
      }

      if(this.isEmptyConnection) {
        this.addedConnect(connect)
        this.updatePointStatus({ boxId: connect.boxId, pointKey: connect.pointKey, status: 'wait'})
        return
      }

      if(this.firstConnect.boxId === connect.boxId) {
        const oldConnect = this.firstConnect
        this.updatePointStatus({ boxId: oldConnect.boxId, pointKey: oldConnect.pointKey, status: 'empty'})
        this.replaceConnect(connect)
        this.updatePointStatus({ boxId: connect.boxId, pointKey: connect.pointKey, status: 'wait'})
        return
      }
      this.addedConnect(connect)
    }
  },
  watch: {
    isReadyConnection() {
      if(this.isReadyConnection){
        const connectId = generateKeyForMap(this.connectionData.firstConnect, this.connectionData.secondConnect)
        this.connectionOfBoxes({...this.connectionData, connectionKey: connectId})
        this.addedCoordinationLine(connectId)
      }
    }
  }
})
</script>

<style lang="scss">
.relationships-field__boxes {
  position: relative;
  overflow: hidden;
  background: rgba(127, 213, 245, 1);
}

</style>
