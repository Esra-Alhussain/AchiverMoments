import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { withAuthenticator } from "@aws-amplify/ui-react";
import Home from "./components/Home";
import AddAchievement from "./components/AddAchievement";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/add" component={AddAchievement} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Routes>
    </Router>
  );
}

export default App;
