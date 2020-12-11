import React, { useEffect } from "react";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";
import useUserModel from "./utils/useUserModel";
import UserContext from "./utils/UserContext";
import "./App.css";

const App = () => {
  const userModel1 = useUserModel();
  const userModel2 = useUserModel("Taylor", "Confused");

  useEffect(() => {
    console.log(userModel1);
  }, [userModel1]);
  useEffect(() => {
    console.log(userModel2);
  }, [userModel2]);

  return (
    <div className="container text-center">
      <h1 className="mt-4 mb-4">Welcome to the Person Creator!</h1>
      <div className="jumbotron">
        <UserContext.Provider value={userModel1}>
          <UserForm />
          <UserCard />
        </UserContext.Provider>
        <UserContext.Provider value={userModel2}>
          <UserForm />
          <UserCard />
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default App;
