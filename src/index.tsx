import React from "react";
import ReactDOM from "react-dom";
import App from './components/App';

import store from './store';

// const App = () => (
//   <h1>My React and TypeScript App!</h1>
// );

console.log(store.getState());

ReactDOM.render(
  <App />,
  document.getElementById("root")
);