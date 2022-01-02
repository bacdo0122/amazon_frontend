/* eslint-disable */
import { combineReducers } from "redux";
import { Products } from "./product";
import { Sum } from "./Sum";
const reducers = combineReducers({
  product: Products,
  total: Sum,
});

export default reducers;
