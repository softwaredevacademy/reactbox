// NPM Packages
import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Project files
import Map from "../components/Map";
import OrderInformation from "../components/OrderInformation";

export default function OrderDetail({ data }) {
  // Global state
  const { t } = useTranslation();
  const { parcel_id } = useParams();

  // Constants
  const selectedOrder = data.find((item) => item.parcel_id === parcel_id);
  const {
    location_coordinate_latitude: latitude,
    location_coordinate_longitude: longitude,
    sender,
  } = selectedOrder;

  return (
    <section id="order-detail">
      <header>
        <h1>{t("detailView:title")} {sender}</h1>
        <p>{t("detailView:description")}</p>
      </header>

      <div className="grid">
        <Map coordinates={[latitude, longitude]} />
        <OrderInformation order={selectedOrder} />
      </div>

      <footer className="footer">
        <Link className="button" to="/">{t("detailView:button-label")}</Link>
      </footer>
    </section>
  );
}
