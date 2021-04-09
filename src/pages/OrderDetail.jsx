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

export default function OrderDetail({ data }) {
  // Constants
  const { parcel_id } = useParams();
  const { t } = useTranslation();
  const selectedOrder = data.find((item) => item.parcel_id === parcel_id);
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
    <section id="order-detail">
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

        {/* prettier-ignore */}
        <div className="column second-content">
          <article className="content-box">
            {/* Mandatory */}
            <DataField label={t("detailView:labels:location")} text={location_name}/>
            <DataField label={t("detailView:labels:eta")} text={FormatedTime(eta) || t("detailView:descriptions:eta")} />
            <DataField label={t("detailView:labels:last_update")} text={FormatedTime(last_updated)} />

            {/* Optionals */}
            {notes && <DataField label={t("detailView:labels:note")} text={notes} />}
            {verification_required && <DataField label={t("detailView:labels:verification")} text={t("detailView:descriptions:verification")} />}
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

OrderDetail.propTypes = {
  data: PropTypes.arrayOf(orderPropType).isRequired,
};
