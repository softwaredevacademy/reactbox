// NPM Packages
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Card({ item }) {
  // Global state
  const { t } = useTranslation();

  // Constants
  const { parcel_id, sender, status } = item;
  const textParcel = `${t("listView:item:parcel_id")} #${parcel_id}`;
  const textStatus = t(`listView:item:status:${status}`);

  return (
    <Link className="card" to={`/order/${parcel_id}`}>
      <div className="first-content">
        <p className="description">{sender}</p>
        <p className="description-small">{textParcel}</p>
      </div>

      <div className="flexbox-expand-space" />

      <div className="midle-content">
        <span className={`icon icon-${status}`} />
        <p className="description-small">{textStatus}</p>
      </div>

      <div className="last-content">
        <span className="cta">{t("listView:item:view-detail")}</span>
        <span className="icon icon-chevron-right" />
      </div>
    </Link>
  );
}
