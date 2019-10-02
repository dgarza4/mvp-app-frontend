import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "styles/global-styles";
import App from "App";

// import makeApolloClient from "graphql/utils/make-apollo-client";
// import { ApolloProvider } from "@apollo/react-apollo";
// const client = makeApolloClient({
//   http: {
//     uri: process.env.REACT_APP_GRAPHQL_ENDPOINT as string,
//     credentials: "include"
//   },
//   ws: {
//     uri: process.env.REACT_APP_GRAPHQL_ENDPOINT_WS as string,
//     config: { reconnect: true }
//   }
// });

// ReactDOM.render(
//   <ApolloProvider client={client}>
//       <Router>
//         <GlobalStyles />
//         <App />
//       </Router>
//   </ApolloProvider>,
//   document.getElementById("root")
// );

ReactDOM.render(
  <Router>
    <GlobalStyles />
    <App />
  </Router>,
  document.getElementById("root")
);
