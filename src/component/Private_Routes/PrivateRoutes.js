import { Redirect, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <>
      <Route
        {...rest}
        render={(props) =>
          state.user.user?.role ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    </>
  );
};

export default PrivateRoute;
