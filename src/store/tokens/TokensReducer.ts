import { Action } from "./Action"


export interface TokenState{
    token: string,
    id: string,
    name: string
}

const initialState = {
    token: '',
    id: '',
    name: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch(action.type){
        case "ADD_TOKEN": {
            return{... state, token: action.payload}
        }
        case "ADD_ID": {
            return{... state, id: action.payload}
        }
        case "ADD_NAME": {
            return{... state, name: action.payload}
        }
        default: return state
    }
}