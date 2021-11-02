import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const adminLogin = localStorage.getItem("admin_login");
  const newAdminLogin = JSON.parse(adminLogin);

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          newAdminLogin?.isAdmin ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;
