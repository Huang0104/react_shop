import { handleActions } from "redux-actions";
import { filter_products_success } from "../Actions/filter";

const handlerFilters = {
  size: 0,
  data: []
}

const filterReducer = handleActions({
  [filter_products_success]: (state, action) => {
    return {
      size: action.payload.size,
      data: action.payload.skip === 0 ? action.payload.data : [...state.data, ...action.payload.data]
    }
  }
}, handlerFilters)

export default filterReducer
