import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.scss";
const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  const [selectedLang, setSelectedLang] = useState("EN");

  const tabs = [
    { label: "Home", id: 1 },
    { label: "About", id: 2 },
    { label: "Contact", id: 3 },
    { label: "Projects", id: 4 },
  ];

  const languages = [
    { label: "EN", id: 5 },
    { label: "DE", id: 6 },
  ];

  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="navbar">
      <div className="tabs selection ">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`text-wrapper ${
              selectedTab === tab.label ? "bold" : ""
            }`}
            onClick={() => setSelectedTab(tab.label)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="languages selection">
        {languages.map((lang) => (
          <div
            onClick={() => {
              setSelectedLang(lang.label);
              changeLanguage(lang.label.toLowerCase());
            }}
            key={lang.id}
            className={`text-wrapper ${
              selectedLang === lang.label ? "bold" : ""
            }`}
          >
            {lang.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
