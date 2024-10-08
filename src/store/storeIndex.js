import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//store states
import scrollPosition from "./global/scrollPosition";
import screenWidth from "./global/screenWidth";
// import searchResults from "./search/searchResults";
import languageReadyState from "./language/languageReadyState";
// import scrollBarWidth from "./global/scrollBarWidth";
// import loading from "./global/loading";
// import adminBreadCrumbState from "./admin/adminBreadCrumbState";
// import categories from "./categories/categories";
// import promotions from "./promotions/promotions";
// import breadCrumbState from "./global/breadCrumbState";
// import photoPromotions from "./photos/photopromotions";

const reducer = combineReducers({
  scrollPosition,
  screenWidth,
  //   searchResults,
  languageReadyState,
  //   scrollBarWidth,
  //   loading,
  //   adminBreadCrumbState,
  //   categories,
  //   promotions,
  //   breadCrumbState,
  //   photoPromotions,
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
