import { createStore, applyMiddleware } from 'redux';
import counterReducer from "./counter/reducer";
import thunk from "redux-thunk";


export const store = createStore(counterReducer, applyMiddleware(thunk));