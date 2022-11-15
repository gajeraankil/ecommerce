import * as actionTypes from "../actionTypes";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { postContactData } from "../../common/api/contactApi";
import { postedData } from "../actions/contactAction";
import { setAlert } from "../actions/alertAction";

function* postData(action) {
  try {
    const user = yield call(postContactData, action.payload);
    yield put(postedData(user));
    yield put(
      setAlert({ text: "Message Send Successfully", color: "success" })
    );
  } catch (error) {
    yield put(setAlert({ text: error.message, color: "error" }));
  }
}

function* watchPostData() {
  yield takeEvery(actionTypes.POST_DATA, postData);
}

export function* contactSaga() {
  yield all([watchPostData()]);
}
