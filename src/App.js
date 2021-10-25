import React from "react";
import DetailTrip from "./pages/detail_trips/DetailTrip";
import Home from "./pages/Home";
import Payment from "./pages/payment/Payment";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListTransaction from "./pages/list_transactions/ListTransaction";
import AddTrip from "./pages/add_trip_form/AddTrip";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail-trip/:id" component={DetailTrip} />
        <Route exact path="/detail-trip/payment/:id" component={Payment} />
        <Route exact path="/user/profile" component={Profile} />
        <Route exact path="/addtrip" component={AddTrip} />
        <Route exact path="/list-transaction" component={ListTransaction} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
