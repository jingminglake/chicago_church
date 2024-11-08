import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//store states
import scrollPosition from "./global/scrollPosition";
import screenWidth from "./global/screenWidth";
import languageReadyState from "./language/languageReadyState";
import loading from "./global/loading";

const reducer = combineReducers({
  scrollPosition,
  screenWidth,
  languageReadyState,
  loading,
});

//
//
let middleware = "";

if (process.env.NODE_ENV === "development") {
  middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
} else {
  middleware = composeWithDevTools(applyMiddleware(thunkMiddleware));
}

const store = createStore(reducer, middleware);

export default store;
