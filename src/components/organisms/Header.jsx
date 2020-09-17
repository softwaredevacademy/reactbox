import React, { useState } from "react";
import { Link } from "react-router-dom";
import i18n from "../../utils/i18n";
import logo from "../../assets/images/logo.svg";
import flag_en from "../../assets/images/flag_en.svg";
import flag_se from "../../assets/images/flag_se.svg";

export default function Header() {
  const [language, setLanguage] = useState("en");

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
      <Link to="/">
        <img src={logo} alt="Reactbox logo" title="Reactbox logo" />
      </Link>

      <div className="spacer" />

      <button
        className="button-language"
        onClick={() => toggleLanguage()}
        type="button"
      >
        <p className="description-small">{language}</p>
        {language === "en" ? (
          <img src={flag_en} alt="British flag" />
        ) : (
          <img src={flag_se} alt="Swedish flag" />
        )}
      </button>
    </header>
  );
}
