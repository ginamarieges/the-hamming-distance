import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./styles/GlobalStyle";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
