import React from "react"
import PropTypes from "prop-types"
import orderPropType from "../../utils/orderPropType"
import OrderItem from "../molecules/OrderItem"

export default function OrderList({ orders }) {
  const listItems = orders.map((item) => {
    return <OrderItem key={item.parcel_id} order={item} />
  })

  return <div className="order-list">{listItems}</div>
}

OrderList.propTypes = {
  orders: PropTypes.arrayOf(orderPropType).isRequired
}
