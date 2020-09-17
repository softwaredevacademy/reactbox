import React from "react"
import orderPropType from "../../utils/orderPropType"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

export default function OrderItem({ order }) {
  const { parcel_id, sender, status } = order
  const { t } = useTranslation()

  return (
    <Link className="order-item" to={`/parcel/${parcel_id}`}>
      <div className="first-content">
        <p className="description">{sender}</p>
        <p className="description-small">
          {t("listView:item:parcel_id")} #{parcel_id}
        </p>
      </div>

      <div className="spacer" />

      <div className="second-content">
        <span className={`icon icon-${status}`} />
        <p className="description-small">
          {t(`listView:item:status:${status}`)}
        </p>
      </div>

      <div className="third-content">
        <span className="cta">{t("listView:item:view-detail")}</span>
        <span className="icon icon-chevron-right" />
      </div>
    </Link>
  )
}

OrderItem.propTypes = {
  order: orderPropType
}
