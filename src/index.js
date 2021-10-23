import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import * as serviceWorker from './serviceWorker';
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-3h31fjp1.us.auth0.com
// 5K8DQteI7jAmMQaBy3UM1TnUVMLwEHaj

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-3h31fjp1.us.auth0.com"
      clientId="5K8DQteI7jAmMQaBy3UM1TnUVMLwEHaj"
      redirectUri={window.location.origin}
      cacheLocation="localstorage "
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// serviceWorker.unregister();
