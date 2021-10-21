import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailTrip from "./routes/detail_trips/DetailTrip";
import Home from "./routes/Home";
import Payment from "./routes/payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/detail-trip" component={DetailTrip} />
        <Route path="/detail-trip/payment" component={Payment} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
