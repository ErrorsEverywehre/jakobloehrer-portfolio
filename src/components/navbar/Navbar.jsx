import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.scss";
const Navbar = () => {
  const { i18n, t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState("ABOUT");
  const [selectedLang, setSelectedLang] = useState();

  const tabs = [
    { label: "ABOUT", id: 1 },
    { label: "WORK", id: 2 },
    { label: "CONTACT", id: 3 },
  ];

  const languages = [
    { label: "en", id: 5 },
    { label: "de", id: 6 },
  ];

  const changeLanguage = (lng) => {
    localStorage.setItem("SELECTED_LANGUAGE", lng);
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const prevSelectedLang = localStorage.getItem("SELECTED_LANGUAGE");
    if (prevSelectedLang.length) {
      i18n.changeLanguage(prevSelectedLang);
      setSelectedLang(prevSelectedLang);
    } else setSelectedLang("en");
  }, []);

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
            {t(tab.label)}
          </div>
        ))}
      </div>
      <div className="languages selection">
        {languages.map((lang) => (
          <div
            onClick={() => {
              setSelectedLang(lang.label);
              changeLanguage(lang.label);
            }}
            key={lang.id}
            className={`text-wrapper ${
              selectedLang === lang.label ? "bold" : ""
            }`}
          >
            {lang.label.toLocaleUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
