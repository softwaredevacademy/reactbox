// NPM Packages
import { Switch, Route } from "react-router-dom";

// Project files
import Home from "../pages/Home";
import OrderDetail from "../pages/OrderDetail";

export default function SwitchLoaded({ data }) {
  return (
    <Switch>
      {/* Home page */}
      <Route path="/" exact>
        <Home data={data} />
      </Route>

      {/* Package detail page */}
      <Route path="/order/:parcel_id">
        <OrderDetail data={data} />
      </Route>
    </Switch>
  );
}
