// NPM Packages
import React from "react";
import PropTypes from "prop-types";

// Project files
import orderPropType from "../../utils/orderPropType";
import { useTranslation } from "react-i18next";

export default function ListView({ orders }) {
  // Constants
  const { t } = useTranslation();

  // Components
  const ListItems = orders.map((item) => {
    return <OrderItem key={item.parcel_id} order={item} />;
  });

  return (
    <section id="list-view">
      {/* Header */}
      <header>
        <h1>
          {t("listView:title")} {orders[0].user_name}
        </h1>
        <p>{t("listView:description")}</p>
      </header>

      {/* Content */}
      <div className="order-list">{ListItems}</div>
    </section>
  );
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(orderPropType).isRequired,
};
