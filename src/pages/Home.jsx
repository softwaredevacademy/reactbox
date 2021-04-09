// NPM Packages
import React from "react";
import { useTranslation } from "react-i18next";

// Project files
import OrderItem from "../components/OrderItem";

export default function Home({ orders }) {
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
