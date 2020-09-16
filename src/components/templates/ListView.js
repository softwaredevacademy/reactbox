import React from "react"
import PropTypes from "prop-types"
import orderPropType from "../../utils/orderPropType"
import { useTranslation } from "react-i18next"
import OrderLists from "../organisms/OrderLists"

export default function ListView({ orders }) {
  const { t } = useTranslation()

  return (
    <section id="list-view">
      <header>
        <h1>
          {t("listView:title")} {orders[0].user_name}
        </h1>
        <p>{t("listView:description")}</p>
      </header>

      <OrderLists orders={orders} />
    </section>
  )
}

ListView.propTypes = {
  orders: PropTypes.arrayOf(orderPropType).isRequired
}
