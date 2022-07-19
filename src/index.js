import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { configureDataStore } from "./store/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import ReduxPunch from "./ReduxPunch";
import { ThemeProvider } from '@mui/material/styles';
import reportWebVitals from "./reportWebVitals";
import { customTheme } from "./theme";

import keycloak from "./Keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";


const store = configureDataStore();
const persistor = persistStore(store);


const keycloakProviderInitConfig = {
  onLoad: "login-required"
};


const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = customTheme();

root.render(
  <ReactKeycloakProvider authClient={keycloak} initConfig = {keycloakProviderInitConfig}>
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <ReduxPunch />
      </ThemeProvider>       
    </PersistGate>
  </Provider>
  </ReactKeycloakProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
