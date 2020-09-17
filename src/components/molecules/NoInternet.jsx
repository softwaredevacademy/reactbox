import React from "react"
import { useTranslation } from "react-i18next"

export default function SpinLoader() {
  const { t } = useTranslation()

  return (
    <div className="no-internet">
      <span className="icon icon-exclamation" />
      <br />
      <span className="description-small">
        {t("common:no_internet_1")}
        <br />
        {t("common:no_internet_2")}
      </span>
    </div>
  )
}