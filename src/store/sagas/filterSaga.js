import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { filter_products, filter_products_success } from "../Actions/filter";
import { API } from '../../config'

function* handleFilter(action) {
  let filterData = yield axios.post(`${API}/products/filter`, action.payload)
  yield put(filter_products_success({
    skip: action.payload.skip,
    ...filterData.data
  }))
}

export default function* FilterSaga() {
  yield takeEvery(filter_products, handleFilter)
}