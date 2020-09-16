import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NoInternet from "./components/molecules/NoInternet";
import SpinLoader from "./components/molecules/SpinLoader";
import Header from "./components/organisms/Header";
import MountedComponent from "./components/organisms/MountedComponent";
import "./style/style.sass";

export default function App() {
  // dataStatus: 0 = "loading", 1 = "data ok", 2 = "data error"
  const [dataStatus, setDataStatus] = useState(0);
  const [orders, setOrders] = useState([]);
  const END_POINT = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(END_POINT, { mode: "cors" });
        const data = await response.json();
        console.log("data");
        console.log(data);
        setOrders(data);
        setDataStatus(1);
      } catch {
        setDataStatus(2);
      }
    };

    getData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        {dataStatus === 0 ? <SpinLoader /> : ""}
        {dataStatus === 1 ? <MountedComponent orders={orders} /> : ""}
        {dataStatus === 2 ? <NoInternet /> : ""}
      </div>
    </Router>
  );
}
