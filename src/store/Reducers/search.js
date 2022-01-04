import { handleActions } from "redux-actions";
import { get_search_products_success } from "../Actions/search";

const initailState = {
  // 存储搜索的结果
  results: []
}

const getSearchProducts = handleActions({
  [get_search_products_success]: (state, action) => {
    console.log(action)
    return {
      results: action.payload.results
    }
  }
}, initailState)

export default getSearchProducts
