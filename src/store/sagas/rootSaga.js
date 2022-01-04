import { all } from 'redux-saga/effects'
import detailsSaga from './detailsSaga'
import FilterSaga from './filterSaga'
import productsSaga from './ProductsSaga'
import registrySaga from './registry'
import GetSearchProducts from './searchSaga'

export default function* rootSaga() {
  yield all([
    registrySaga(),
    productsSaga(),
    GetSearchProducts(),
    FilterSaga(),
    detailsSaga()
  ])
} 