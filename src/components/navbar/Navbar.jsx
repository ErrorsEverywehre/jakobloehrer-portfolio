import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.scss";

const Navbar = ({ aboutRef, workRef, contactRef }) => {
  const { i18n, t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState("ABOUT");
  const [selectedLang, setSelectedLang] = useState();


  const tabs = [
    { label: "ABOUT", id: 1, ref: aboutRef },
    { label: "WORK", id: 2, ref: workRef },
    { label: "CONTACT", id: 3, ref: contactRef },
  ];

  const languages = [
    { label: "en", id: 5,},
    { label: "de", id: 6 },
  ];
  useEffect(() => {
    const prevSelectedLang = localStorage.getItem("SELECTED_LANGUAGE");
    if (prevSelectedLang) {
      i18n.changeLanguage(prevSelectedLang);
      setSelectedLang(prevSelectedLang);
    } else setSelectedLang("en");
  }, []);

  const changeLanguage = (lng) => {
    localStorage.setItem("SELECTED_LANGUAGE", lng);
    i18n.changeLanguage(lng);
  };


  const handleTabClick = (tab) => {
    setSelectedTab(tab.label);
    console.log(tab)

    tab.ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="navbar">
      <div className="tabs selection">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`text-wrapper ${
              selectedTab === tab.label ? "bold" : ""
            }`}
            onClick={() => handleTabClick(tab)}
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
