import axios from "axios";
import { takeEvery, put } from "redux-saga/effects"; 
import { get_search_products, get_search_products_success } from "../Actions/search";
import { API } from '../../config'

function* handleSearchProducts(action) {
  let results = yield axios.get(`${API}/products/search`, { params: action.payload })
  console.log(results)
  yield put(get_search_products_success({results: results.data}))
}

export default function* GetSearchProducts() {
  yield takeEvery(get_search_products, handleSearchProducts)
} 