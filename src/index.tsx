import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from './components/App';
import store from './store';

// const App = () => (
//   <h1>My React and TypeScript App!</h1>
// );


console.log(store.getState());


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);