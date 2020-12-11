import React, { useState, useEffect } from "react";
import API from "../utils/API";
import CardContainer from "../components/CardContainer";
import Row from "../components/Row";

function Gallery() {

  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [userIndex, setUserIndex] = useState(0);

  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    loadUsers();
  }, []);
    
  // Capitalize the first letter of a given string
  function capitalizeFirstLetter(string = "") {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Ensure that the user index stays within our range of users
  function nextUser() {
    const nextIndex = userIndex + 1;
    setUserIndex(nextIndex);
    setUser(users[nextIndex]);
  }

  // Ensure that the user index stays within our range of users
  function previousUser() {
    const prevIndex = userIndex - 1;
    setUserIndex(prevIndex);
    setUser(users[prevIndex]);
  }

  function handleBtnClick(event) {
    // Get the title of the clicked button
    const btnName = event.target.getAttribute("data-value");
    if (btnName === "next") {
      nextUser();
    } else {
      previousUser();
    }
  }

  function loadUsers() {
    API.getLanguagesList()
      .then(languages => {
        API.getUsersByLanguage(languages[0]).then((users) => {
          setUsers(users);
          setUser(users[userIndex]);
        });
      })
      .catch(err => console.log(err));
  }

  return (
    <div>
      <h1 className="text-center">Welcome to LinkedUp</h1>
      <h3 className="text-center">Click on the arrows to browse users</h3>
      <Row>
        <CardContainer
          title={`${user.firstname} ${user.lastname}`}
          image={user.image}
          email={user.email}
          language={user.language}
          handleClick={handleBtnClick} />
      </Row>
    </div>
  );
}

export default Gallery;
