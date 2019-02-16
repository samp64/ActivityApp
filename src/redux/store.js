import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducer";

import { adressesSaga } from "./reducer";

const sagaMiddleware = createSagaMiddleware();


export default createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(adressesSaga);