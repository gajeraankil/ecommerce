import { all } from "redux-saga/effects";
import { contactSaga } from "./contactSaga";

export function* rootSaga() {
  yield all([contactSaga()]);
}
