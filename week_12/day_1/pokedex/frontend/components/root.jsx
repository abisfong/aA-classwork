import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import App from './app';

const Root = ({ store }) => (
  <Provider store={store}>
      <HashRouter>
      <Route component={pokemonDetail} path="/pokemon/:id"/>
        <App />
      </HashRouter>
  </Provider>
);

export default Root;