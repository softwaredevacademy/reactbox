// NPM Packages
import React from "react";
import { Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

// Project files
import DetailView from "../pages/DetailView";
import ListView from "../pages/ListView";
import orderPropType from "../utils/orderPropType";

// About this component
// Mounted component extract the router from the App, so the if case scnearios look cleaner in the App.
export default function MountedComponent({ orders }) {
  return (
    <Switch>
      <Route path="/parcel/:parcel_id">
        <DetailView orders={orders} />
      </Route>
      <Route path="/">
        <ListView orders={orders} />
      </Route>
    </Switch>
  );
}

MountedComponent.propTypes = {
  orders: PropTypes.arrayOf(orderPropType).isRequired,
};
