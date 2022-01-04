import { handleActions } from "redux-actions"
import { get_Products_success } from "../Actions/Products"

const initailState = {
  // 销量 排序
  sold: [],
  // 创建时间 排序
  createdAt: []
}

const ProductsReducer = handleActions({
  [get_Products_success]: (state, action ) => {
    return {
      ...state,
      [action.payload.sortBy]: action.payload.products
    }
  }
}, initailState)

export default ProductsReducer
