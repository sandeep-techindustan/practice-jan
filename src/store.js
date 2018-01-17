//File Name: store.js
//Path: src/
//Description: This file contains the initialization of Store and middleware in store.
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import * as reducers from './reducers'
import thunk from 'redux-thunk';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store;