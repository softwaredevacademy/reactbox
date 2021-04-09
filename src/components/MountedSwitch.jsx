// NPM Packages
import React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

// Project files
import Home from "../pages/Home";
import PackageDetail from "../pages/PackageDetail";
import orderPropType from "../utils/orderPropType";

// About this component
// Extract the Switch from the App, so the if case scnearios look cleaner in the App.
export default function MountedSwitch({ data }) {
  return (
    <Switch>
      {/* Home page */}
      <Route path="/">
        <Home data={data} />
      </Route>

      {/* Package detail page */}
      <Route path="/order/:parcel_id">
        <PackageDetail data={data} />
      </Route>
    </Switch>
  );
}

MountedSwitch.propTypes = {
  orders: PropTypes.arrayOf(orderPropType).isRequired,
};
