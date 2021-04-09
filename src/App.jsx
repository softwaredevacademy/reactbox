// NPM Packages
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NoInternet from "./components/NoInternet";

// Project files
import SpinLoader from "./components/SpinLoader";
import Header from "./components/Header";
import MountedSwitch from "./components/MountedSwitch";
import BackupOrders from "./data/backup_orders.json";
import "./style/style.sass";

export default function App() {
  // Local state
  const [status, setStatus] = useState(0); // 0 = "loading", 1 = "data ok", 2 = "data error"
  const [data, setData] = useState([]);

  // Constants
  const DEBUG_MODE = true; // To decide if we show backup data in case of a server failure.
  const API_URL = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

  // Methods
  useEffect(() => {
    fetch(API_URL, { mode: "cors" })
      .then((response) => response.json())
      .then((json) => onSucess(json))
      .catch((error) => onFail(error));
  }, [setStatus, setData]);

  function onSucess(json) {
    setData(json);
    setStatus(1);
  }

  function onFail() {
    if (DEBUG_MODE) {
      setData(BackupOrders);
      setStatus(1);
    } else {
      setStatus(2);
    }
  }

  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />

        {/* Content */}
        {status === 0 ? <SpinLoader /> : ""}
        {status === 1 ? <MountedSwitch data={data} /> : ""}
        {status === 2 ? <NoInternet /> : ""}
      </div>
    </Router>
  );
}
