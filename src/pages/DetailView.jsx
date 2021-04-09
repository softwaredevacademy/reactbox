// NPM Packages
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

// Project files
import Map from "../components/Map";
import DataField from "../components/DataField";
import orderPropType from "../utils/orderPropType";
import FormatedTime from "../utils/FormatedTime";

export default function DetailView({ orders }) {
  // Constants
  const { parcel_id } = useParams();
  const { t } = useTranslation();
  const selectedOrder = orders.find((order) => order.parcel_id === parcel_id);
  const {
    eta,
    last_updated,
    location_coordinate_latitude,
    location_coordinate_longitude,
    location_name,
    notes,
    sender,
    verification_required,
  } = selectedOrder;

  return (
    <section id="detail-view">
      {/* Header */}
      <header>
        <h1>
          {t("detailView:title")} {sender}
        </h1>
        <p>{t("detailView:description")}</p>
      </header>

      {/* Content */}
      <div className="columns">
        <div className="column first-content">
          <Map
            latitude={location_coordinate_latitude}
            longitude={location_coordinate_longitude}
          />
        </div>

        <div className="column second-content">
          <article className="content-box">
            {/* Location */}
            <DataField
              label={t("detailView:labels:location")}
              text={location_name}
            />

            {/* Estimated delivery time */}
            <DataField
              label={t("detailView:labels:eta")}
              text={FormatedTime(eta) || t("detailView:descriptions:eta")}
            />

            {/* Last package update */}
            <DataField
              label={t("detailView:labels:last_update")}
              text={FormatedTime(last_updated)}
            />

            {/* Notes (if any) */}
            {notes && (
              <DataField label={t("detailView:labels:note")} text={notes} />
            )}

            {/* Verification (if required) */}
            {verification_required && (
              <DataField
                label={t("detailView:labels:verification")}
                text={t("detailView:descriptions:verification")}
              />
            )}
          </article>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <Link className="button" to="/">
          {t("detailView:button-label")}
        </Link>
      </footer>
    </section>
  );
}

DetailView.propTypes = {
  orders: PropTypes.arrayOf(orderPropType).isRequired,
};
