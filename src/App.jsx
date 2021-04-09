// NPM Packages
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NoInternet from "./components/NoInternet";

// Project files
import SpinLoader from "./components/SpinLoader";
import Header from "./components/Header";
import MountedComponent from "./components/MountedComponent";
import "./style/style.sass";

export default function App() {
  // Local state
  const [status, setStatus] = useState(0); // 0 = "loading", 1 = "data ok", 2 = "data error"
  const [orders, setOrders] = useState([]);

  // Constants
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Methods
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(API_URL, { mode: "cors" });
        const data = await response.json();
        console.log("data");
        console.log(data);
        setOrders(data);
        setStatus(1);
      } catch {
        setStatus(2);
      }
    };

    getData();
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />

        {/* Content */}
        {status === 0 ? <SpinLoader /> : ""}
        {status === 1 ? <MountedComponent orders={orders} /> : ""}
        {status === 2 ? <NoInternet /> : ""}
      </div>
    </Router>
  );
}
