import { PacksActionsType } from './packsActions'
import {PacksInitState, PacksStateType} from './packsInitState'

export const packsReducer = (state = PacksInitState, action: PacksActionsType): PacksStateType => {
    switch (action.type) {
        default:
            return state
    }
}