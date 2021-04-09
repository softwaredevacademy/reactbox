// NPM Packages
import React from "react";
import { useTranslation } from "react-i18next";

export default function SpinLoader() {
  // Constants
  const { t } = useTranslation();

  return (
    <div className="spin-loader">
      <div className="loader" />
      <span className="description-small">{t("common:loading")}</span>
    </div>
  );
}
