import { createStore, combineReducers } from "redux";
import { goodsStore } from "./goodsStore";
import { cartStore } from "./cartStore";
import { composeWithDevTools } from "redux-devtools-extension";

const rootStore = combineReducers({ goodsStore, cartStore });

export const store = createStore(rootStore, composeWithDevTools());
