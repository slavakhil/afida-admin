import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';

const appReducer = combineReducers({});

const rootReducer = (state, action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }
  return appReducer(state, action);
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
