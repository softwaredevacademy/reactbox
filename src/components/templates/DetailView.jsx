import React from "react";
import PropTypes from "prop-types";
import orderPropType from "../../utils/orderPropType";
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import FormatedTime from "../../utils/FormatedTime";
import Map from "../molecules/Map";
import DataField from "../molecules/DataField";

export default function DetailView({ orders }) {
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
      <header>
        <h1>
          {t("detailView:title")} {sender}
        </h1>
        <p>{t("detailView:description")}</p>
      </header>

      <div className="columns">
        <div className="column first-content">
          <Map
            latitude={location_coordinate_latitude}
            longitude={location_coordinate_longitude}
          />
        </div>

        <div className="column second-content">
          <article className="content-box">
            <DataField
              label={t("detailView:labels:location")}
              text={location_name}
            />
            <DataField
              label={t("detailView:labels:eta")}
              text={FormatedTime(eta) || t("detailView:descriptions:eta")}
            />
            <DataField
              label={t("detailView:labels:last_update")}
              text={FormatedTime(last_updated)}
            />
            {notes ? (
              <DataField label={t("detailView:labels:note")} text={notes} />
            ) : (
              ""
            )}
            {verification_required ? (
              <DataField
                label={t("detailView:labels:verification")}
                text={t("detailView:descriptions:verification")}
              />
            ) : (
              ""
            )}
          </article>
        </div>
      </div>

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
