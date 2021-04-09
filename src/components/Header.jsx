// NPM Packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project files
import flag_en from "../assets/images/flag_en.svg";
import flag_se from "../assets/images/flag_se.svg";
import logo from "../assets/images/logo.svg";
import i18n from "../utils/i18n";

export default function Header() {
  // Local state
  const [language, setLanguage] = useState("en");

  // Methods
  function toggleLanguage() {
    if (language === "en") {
      i18n.changeLanguage("se");
      setLanguage("se");
    } else {
      i18n.changeLanguage("en");
      setLanguage("en");
    }
  }

  return (
    <header className="header">
      {/* Logo to go home */}
      <Link to="/">
        <img src={logo} alt="Reactbox logo" title="Reactbox logo" />
      </Link>

      {/* Trick to make flexbox take all space */}
      <div className="spacer" />

      {/* Change language button */}
      <button className="button-language" onClick={toggleLanguage}>
        <p className="description-small">{language}</p>
        {language === "en" && <img src={flag_en} alt="British flag" />}
        {language === "se" && <img src={flag_se} alt="Swedish flag" />}
      </button>
    </header>
  );
}
