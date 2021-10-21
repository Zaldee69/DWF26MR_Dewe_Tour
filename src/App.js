import React from "react";
import DetailTrip from "./pages/detail_trips/DetailTrip";
import Home from "./pages/Home";
import Payment from "./pages/payment/Payment";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail-trip" component={DetailTrip} />
        <Route exact path="/detail-trip/payment" component={Payment} />
        <Route exact path="/user/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
