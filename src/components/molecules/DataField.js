import React from "react"
import PropTypes from "prop-types"

export default function DetailView({ label, text }) {
  return (
    <div className="data-field">
      <p className="label">{label}</p>
      <p className="description">{text}</p>
      <hr />
    </div>
  )
}

DetailView.propTypes = {
  label: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
