//Global State
import { AuthContext } from "./context/AuthContextProvider";

//React-router-dom
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Hooks
import { useContext, useEffect } from "react";

//Axios config
import { API, setAuthToken } from "./config/api";

//Routes
import DetailTrip from "./pages/DetailTrip/DetailTrip";
import Home from "./pages/Home";
import Payment from "./pages/payment/Payment";
import Profile from "./pages/profile/Profile";
import ListTransaction from "./pages/list_transactions/ListTransaction";
import AddTrip from "./pages/AddTripForm/AddTrip";
import PrivateRoute from "./component/Private_Routes/PrivateRoutes";
import Wishlist from "./pages/wishlist/Wishlist";

//init token
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const { state, dispatch } = useContext(AuthContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
  }, []);

  //get user data
  const userAuth = async () => {
    try {
      const response = await API.get("/check-auth");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data;

      payload.token = localStorage.token;

      //send data to useContext
      dispatch({
        type: "USER_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: "AUTH_ERROR",
      });
    }
  };

  useEffect(() => {
    userAuth();
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {state.isLoading ? (
          "Loading"
        ) : (
          <>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail-trip/:id" component={DetailTrip} />
            <Route exact path="/payment/" component={Payment} />
            <Route exact path="/user/profile" component={Profile} />
            <PrivateRoute exact path="/addtrip" component={AddTrip} />
            <PrivateRoute
              exact
              path="/list-transaction"
              component={ListTransaction}
            />
            <PrivateRoute exact path="/wishlist" component={Wishlist} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
