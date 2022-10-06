import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import profileReducer from "./reducers";

const rootReducer = combineReducers({ profileReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
