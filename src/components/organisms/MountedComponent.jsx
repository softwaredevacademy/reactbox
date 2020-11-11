import React from "react";
import PropTypes from "prop-types";
import orderPropType from "../../utils/orderPropType";
import { Switch, Route } from "react-router-dom";
import DetailView from "../templates/DetailView";
import ListView from "../templates/ListView";
import App from "../../App";

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
