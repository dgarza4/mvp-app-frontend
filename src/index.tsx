import React from "react";
import { render, hydrate } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "styles/global-styles";
import App from "App";
import { AuthProvider } from "components/CognitoAuth";

const FullApp = () => {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <App />
      </Router>
    </AuthProvider>
  );
};

const rootElement = document.getElementById("root");

if (rootElement?.hasChildNodes()) {
  hydrate(<FullApp />, rootElement);
} else {
  render(<FullApp />, rootElement);
}
