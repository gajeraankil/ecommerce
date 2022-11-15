import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import { rootReducer } from "./reducers/index";
import { rootSaga } from "./saga/index";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [thunk, sagaMiddleware];

export const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(...middleware))
);

export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
