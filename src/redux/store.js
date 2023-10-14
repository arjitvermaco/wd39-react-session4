import { combineReducers, legacy_createStore } from "redux";
import { cakeStoreReducer } from "./reducers/cakeStore.reducer";

const rootReducer = combineReducers({
    cake: cakeStoreReducer,
})

const store = legacy_createStore(rootReducer)

export default store