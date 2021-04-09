// NPM Packages
import React from "react";
import { useTranslation } from "react-i18next";

// Project files
import Card from "../components/Card";

export default function Home({ data }) {
  // Constants
  const { t } = useTranslation();

  // Components
  const CardsArray = data.map((item) => {
    return <Card key={item.parcel_id} item={item} />;
  });

  return (
    <section id="home">
      {/* Header */}
      <header>
        <h1>
          {t("listView:title")} {data[0].user_name}
        </h1>
        <p>{t("listView:description")}</p>
      </header>

      {/* Content */}
      <div className="order-list">{CardsArray}</div>
    </section>
  );
}
