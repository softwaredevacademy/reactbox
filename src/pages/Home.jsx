// NPM Packages
import { useTranslation } from "react-i18next";

// Project files
import Card from "../components/Card";

export default function Home({ data }) {
  // Global state
  const { t } = useTranslation();

  // Const
  const userGreet = `${t("listView:title")} ${data[0].user_name}`;

  // Components
  const CardsArray = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <section id="home">
      {/* Header */}
      <header>
        <h1>{userGreet}</h1>
        <p>{t("listView:description")}</p>
      </header>

      {/* Content */}
      <div className="order-list">{CardsArray}</div>
    </section>
  );
}
