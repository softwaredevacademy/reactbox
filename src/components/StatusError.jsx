// NPM Packages
import { useTranslation } from "react-i18next";

export default function StatusError() {
  // Global state
  const { t } = useTranslation();

  return (
    <div className="no-internet">
      <span className="icon icon-exclamation" />
      <p className="description-small">{t("common:no_internet_1")}</p>
      <p className="description-small">{t("common:no_internet_2")}</p>
    </div>
  );
}
