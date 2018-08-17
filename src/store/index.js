import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import plaid from "./plaid"
import accounts from "./accounts"
import transactions from "./transactions"



const reducer = combineReducers({
    plaid,
    accounts,
    transactions
})

const middleware = composeWithDevTools(
    applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
  );


const store = createStore(reducer, middleware);


export default store;
export * from "./plaid";
export * from "./accounts"
export * from "./transactions"