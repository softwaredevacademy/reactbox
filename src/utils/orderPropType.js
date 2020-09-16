import PropTypes from "prop-types";

const orderPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  eta: PropTypes.string,
  parcel_id: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  verification_required: PropTypes.bool.isRequired,
  location_id: PropTypes.string.isRequired,
  location_name: PropTypes.string.isRequired,
  location_coordinate_latitude: PropTypes.number.isRequired,
  location_coordinate_longitude: PropTypes.number.isRequired,
  location_status_ok: PropTypes.bool.isRequired,
  user_phone: PropTypes.string.isRequired,
  user_name: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  last_updated: PropTypes.string.isRequired,
}).isRequired;

export default orderPropType;
