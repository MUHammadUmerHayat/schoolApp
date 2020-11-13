import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Container} from "native-base";
import Login from "./components/login";
import reducer from "./reducer";
import {createStore,applyMiddleware,compose} from "redux";
import reduxThunk from "redux-thunk";
import {Provider} from "react-redux";
import Routes from "./routes/routes";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=createStore(reducer,{},composeEnhancers(applyMiddleware(reduxThunk)));

export default function App() {
  return (
    <Provider store={store}>
    <Routes/>
    </Provider>
  );
}


