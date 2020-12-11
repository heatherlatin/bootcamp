import React, { useContext } from "react";
import LanguageContext from "../../utils/languageContext";
import "./style.css";

function LanguageSelect() {
  const { languages, selectLanguage } = useContext(LanguageContext);
  return (
    <select onChange={ event => selectLanguage(event.target.value)}>
      {languages.map(dbLang => <option val={dbLang}>{dbLang}</option>)}
    </select>
  );
}

export default LanguageSelect;
