import { routerMiddleware } from "connected-react-router";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import createRootReducer from "./Reducers";
import { createBrowserHistory } from 'history'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";
import { composeWithDevTools } from "redux-devtools-extension"

export const history = createBrowserHistory()
const saga = createSagaMiddleware()

const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(routerMiddleware(history), saga))
)

saga.run(rootSaga)

export default store