// NPM Packages
import React from "react";
import PropTypes from "prop-types";

export default function DataField({ label, text }) {
  return (
    <div className="data-field">
      <p className="label">{label}</p>
      <p className="description">{text}</p>
      <hr />
    </div>
  );
}

DataField.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
