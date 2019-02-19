import { put, takeEvery } from "redux-saga/effects";
import { API } from "aws-amplify";
import {
  FETCH_ADDRESSES,
  FETCH_ADDRESSES_SUCCESS,
  FETCH_ADDRESSES_FAILED,
} from ".";

export function* addressesSaga() {
  yield takeEvery(FETCH_ADDRESSES, fetchAddresses); 
}
  
function* fetchAddresses() {
  try {
    const addresses = yield  API.get("address", "/address");
    return yield put({ type: FETCH_ADDRESSES_SUCCESS, addresses });
  } catch(e) {
    yield put({ type: FETCH_ADDRESSES_FAILED });
    return e;
  }
}