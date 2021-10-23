import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuthenticated, user } = useAuth0();
  const isUser = false;
  return (
    <Route
      {...rest}
      render={() => {
        return isUser ? children : <Login />;
      }}
    ></Route>
  );
};

export default PrivateRoute;
