// NPM Packages
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Card({ item }) {
  // Constants
  const { parcel_id, sender, status } = item;
  const { t } = useTranslation();

  return (
    <Link className="card" to={`/order/${parcel_id}`}>
      <div className="first-content">
        <p className="description">{sender}</p>
        <p className="description-small">{t("listView:item:parcel_id")} #{parcel_id}</p>
      </div>

      {/* Trick to make flexbox utilize all the space on mobile */}
      <div className="spacer" />

      <div className="midle-content">
        <span className={`icon icon-${status}`} />
        <p className="description-small">{t(`listView:item:status:${status}`)}</p>
      </div>

      <div className="last-content">
        <span className="cta">{t("listView:item:view-detail")}</span>
        <span className="icon icon-chevron-right" />
      </div>
    </Link>
  );
}
