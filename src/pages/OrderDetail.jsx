// NPM Packages
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Project files
import Map from "../components/Map";
import DataField from "../components/DataField";
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

          {/* Optional fields */}
          {notes && (
            <DataField label={t("detailView:labels:note")} text={notes} />
          )}
          {verification_required && (
            <DataField
              label={t("detailView:labels:verification")}
              text={t("detailView:descriptions:verification")}
            />
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
