import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../context/auth/authContext";

const AdminRoute = ({ component: Component, ...rest }) => {
  const {
    state: { user },
  } = useContext(authContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default AdminRoute;
