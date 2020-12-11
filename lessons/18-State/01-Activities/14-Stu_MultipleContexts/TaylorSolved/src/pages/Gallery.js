import React, { useEffect, useState } from "react";
import API from "../utils/API";
import UserContext from "../utils/userContext";
import LanguageContext from "../utils/languageContext";
import CardContainer from "../components/CardContainer";
import LanguageSelect from "../components/LanguageSelect";
import Row from "../components/Row";

function Gallery() {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [userIndex, setUserIndex] = useState(0);
  const [languages, setLanguages] = useState([]);
  const [language, setLanguage] = useState("JavaScript");

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadLanguages();
  }, []);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    if (language) {
      API.getUsersByLanguage(language).then((users) => {
        setUsers(users);
        setUser(users[0]);
      });
    }
  }, [language]);

  function loadLanguages() {
    API.getLanguagesList()
      .then(dbLanguages => {
        setLanguages(dbLanguages);
        console.log(languages)
        setLanguage(languages[0]);
      })
      .catch(err => console.log(err));
  }
    
  function capitalizeFirstLetter(string = "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function nextUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex >= users.length) {
      userIndex = 0;
    }
    setUserIndex(userIndex);
    setUser(users[userIndex]);
  }

  function selectLanguage(language) {
    setLanguage(language);
  }

  function previousUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex < 0) {
      userIndex = users.length - 1;
    }
    setUserIndex(userIndex);
    setUser(users[userIndex]);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      const newUserIndex = userIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = userIndex - 1;
      previousUser(newUserIndex);
    }
  }

  return (
    <UserContext.Provider value={{ user, users, userIndex, capitalizeFirstLetter, handleBtnClick }}>
      <LanguageContext.Provider value={{ language, languages, selectLanguage }}>
        <div>
          <h1 className="text-center">Welcome to LinkedUp</h1>
          <h3 className="text-center">Click on the arrows to browse users</h3>
          <Row>
            <CardContainer />
          </Row>
          <LanguageSelect />
        </div>
      </LanguageContext.Provider>
    </UserContext.Provider>
  );
}


export default Gallery;
