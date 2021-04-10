// NPM Packages
import { useTranslation } from "react-i18next";

// Project files
import DataField from "./DataField";
import FormatedTime from "../utils/FormatedTime";

export default function OrderInformation({ order }) {
  // Global state
  const { t } = useTranslation();

  // Constants
  const {
    eta,
    last_updated,
    location_name,
    notes,
    verification_required: verify,
  } = order;

  // prettier-ignore
  return (
    <div className="content-box">
      {/* Mandatory fields */}
      <DataField label={t("detailView:labels:location")} text={location_name} />
      <DataField label={t("detailView:labels:eta")} text={FormatedTime(eta) || t("detailView:descriptions:eta")} />
      <DataField label={t("detailView:labels:last_update")} text={FormatedTime(last_updated)} />

      {/* Optional fields */}
      {notes && <DataField label={t("detailView:labels:note")} text={notes} />}
      {verify && <DataField label={t("detailView:labels:verification")} text={t("detailView:descriptions:verification")} />}
    </div>
  );
}
