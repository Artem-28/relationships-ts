import {IConnect} from "@/types/interfaces/Relationships/modules";

export default {
    namespaced: true,
    state: {
        connection: [],
        coordinationLine: {}
    },
    getters: {
        firstConnect: (state: StateRelationships): IConnect => state.connection[0],
        coordinationLine: (state: StateRelationships) => state.coordinationLine,
        isReadyConnection: (state: StateRelationships): boolean => state.connection.length === 2,
        isEmptyConnection: (state: StateRelationships): boolean => !state.connection.length,
        connectionData: (state: StateRelationships) => {
            return {
                firstConnect: state.connection[0],
                secondConnect: state.connection[1],
            }
        }
    },
    mutations: {
        addedConnect: (state: StateRelationships, connect: IConnect) => {
            state.connection.push(connect);
        },
        replaceConnect: (state: StateRelationships, connect: IConnect) => {
            state.connection.splice(0, 1, connect)
        },
        addedCoordinationLine(state: StateRelationships, key: string) {
            const coordinationLine = {...state.coordinationLine}
            coordinationLine[key] = { firstConnect: state.connection[0], secondConnect: state.connection[1] }
            state.coordinationLine = coordinationLine
            state.connection.length = 0
        },
        deleteCoordinationLine: (state: StateRelationships, connectId: string) => {
            const coordinationLine = {...state.coordinationLine}
            delete coordinationLine[connectId]
            state.coordinationLine = coordinationLine
        },
        clearConnections(state: StateRelationships) {
            state.connection.length = 0
        }
    }
}
