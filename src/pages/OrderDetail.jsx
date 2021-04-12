// NPM Packages
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Project files
import Map from "../components/Map";
import FormatedTime from "../utils/FormatedTime";

export default function OrderDetail({ data }) {
  // Global state
  const { t } = useTranslation();
  const { parcel_id } = useParams();

  // Constants
  const selectedOrder = data.find((item) => item.parcel_id === parcel_id);
  const {
    eta,
    last_updated,
    location_coordinate_latitude: latitude,
    location_coordinate_longitude: longitude,
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
        <Map coordinates={[latitude, longitude]} />

        <div className="content-box">
          {/* Mandatory fields */}
          {/* -- Location name */}
          <div className="data-field">
            <small className="label">{t("detailView:labels:location")}</small>
            <p className="description">{location_name}</p>
            <hr />
          </div>

          {/* -- Estimate delivery time */}
          <div className="data-field">
            <small className="label">{t("detailView:labels:eta")}</small>
            <p className="description">
              {FormatedTime(eta) || t("detailView:descriptions:eta")}
            </p>
            <hr />
          </div>

          {/* -- Last update */}
          <div className="data-field">
            <small className="label">
              {t("detailView:labels:last_update")}
            </small>
            <p className="description">{FormatedTime(last_updated)}</p>
            <hr />
          </div>

          {/* Optional fields */}
          {/* -- Notes */}
          {notes && (
            <div className="data-field">
              <small className="label">{t("detailView:labels:note")}</small>
              <p className="description">{notes}</p>
              <hr />
            </div>
          )}

          {/* -- Verification required? */}
          {verification_required && (
            <div className="data-field">
              <small className="label">
                {t("detailView:labels:verification")}
              </small>
              <p className="description">
                {t("detailView:descriptions:verification")}
              </p>
              <hr />
            </div>
          )}
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
