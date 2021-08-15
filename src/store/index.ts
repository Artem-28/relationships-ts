import Vue from 'vue'
import Vuex from 'vuex'
import { Store } from 'vuex'
import {IConnect} from "@/interfaces/Relationships/IConnect";
import Boxes from './modules/boxes'
import Relationships from './modules/relationships'
import {ICoordinationLineMap} from "@/interfaces/RelationshipStore/Relationships";

Vue.use(Vuex)



declare module './modules/relationships' {
  // объявляем состояние вашего собственного магазина
  interface StateRelationships {
    connection: IConnect[]
    coordinationLine: ICoordinationLineMap
  }
  // предоставляем типизацию для `this. $ store`
  /*interface ComponentCustomProperties {
    $store: Store<StateRelationships>
  }*/
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Boxes,
    Relationships
  }
})
