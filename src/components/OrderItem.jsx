// NPM Packages
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Project files
import orderPropType from "../utils/orderPropType";

export default function OrderItem({ order }) {
  // Contasnts
  const { parcel_id, sender, status } = order;
  const { t } = useTranslation();

  return (
    <Link className="order-item" to={`/parcel/${parcel_id}`}>
      {/* Left side mobile. Top part desktop  */}
      <div className="first-content">
        <p className="description">{sender}</p>
        <p className="description-small">
          {t("listView:item:parcel_id")} #{parcel_id}
        </p>
      </div>

      {/* Trick to make flexbox utilize all the space on mobile */}
      <div className="spacer" />

      {/* Midle content */}
      <div className="second-content">
        <span className={`icon icon-${status}`} />
        <p className="description-small">
          {t(`listView:item:status:${status}`)}
        </p>
      </div>

      {/* Right side mobile. Bottom part desktop  */}
      <div className="third-content">
        <span className="cta">{t("listView:item:view-detail")}</span>
        <span className="icon icon-chevron-right" />
      </div>
    </Link>
  );
}

OrderItem.propTypes = {
  order: orderPropType,
};
