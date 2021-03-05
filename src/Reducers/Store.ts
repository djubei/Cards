import {applyMiddleware, createStore} from 'redux'
import {combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {loginReducer} from "./LoginReducer/LoginReducer";


export type AppRootReducer = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
    login: loginReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))