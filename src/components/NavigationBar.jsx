// NPM Packages
import { useState } from "react";
import { Link } from "react-router-dom";

// Project files
import flag_en from "../assets/images/flag_en.svg";
import flag_se from "../assets/images/flag_se.svg";
import logo from "../assets/images/logo.svg";
import i18n from "../utils/i18n";

export default function NavigationBar() {
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
    <nav id="navigation-bar">
      <Link to="/">
        <img src={logo} alt="Reactbox logo" title="Reactbox logo" />
      </Link>

      <div className="flexbox-expand-space" />

      <button className="button-language" onClick={toggleLanguage}>
        <p className="description-small">{language}</p>
        {language === "en" && <img src={flag_en} alt="British flag" />}
        {language === "se" && <img src={flag_se} alt="Swedish flag" />}
      </button>
    </nav>
  );
}

// Note:
// All the logic belongs to the language button.
// If we want to further refactor, we can extract it.
