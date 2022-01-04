import axios from 'axios'
import { takeEvery, put } from 'redux-saga/effects'
import { registry, registry_fail, registry_success } from '../Actions/registry'
import { API } from '../../config'

function* handleRegistry(action) {
  try {
    yield axios.post(`${API}/signup`, action.payload)
    yield put(registry_success())
  } catch(error) {
    yield put(registry_fail({message: error.response.data.error}))
  }
}


function* registrySaga() {
  yield takeEvery(registry, handleRegistry)
}

export default registrySaga
