import axios from "axios";
import { takeEvery, put } from "redux-saga/effects";
import { get_details_by_id, get_details_by_id_success } from "../Actions/details";
import { API } from '../../config'

function* handleDetails(action) {
  let details = yield axios.get(`${API}/product/${action.payload.productId}`)
  yield put(get_details_by_id_success(details.data))
}

export default function* detailsSaga() {
  yield takeEvery(get_details_by_id, handleDetails)
}