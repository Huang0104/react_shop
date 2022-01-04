import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import detailsReducer from "./details";
import filterReducer from "./filter";
import ProductsReducer from "./ProductsReducer";
import testReducer from "./reducer";
import registryReducer from "./registry";
import getSearchProducts from "./search";

const createRootReducer = history => combineReducers({
  testReducer,
  router: connectRouter(history),
  registry: registryReducer,
  products: ProductsReducer,
  results: getSearchProducts,
  filter: filterReducer,
  details: detailsReducer

})

export default createRootReducer
