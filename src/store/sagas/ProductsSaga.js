import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { get_Products, get_Products_success } from "../Actions/Products";
import { API } from '../../config'

function* handleProductsSage(action) {
  let Products = yield axios.get(`${API}/products`, { params: action.payload })
  yield put(get_Products_success({
    sortBy: action.payload.sortBy,
    products: Products.data
  }))
}

function* productsSaga() {
  yield takeEvery(get_Products, handleProductsSage)
}

export default productsSaga