import React from "react";
import logo from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo image" />
      <h1>Quiz App</h1>
    </header>
  );
}

export default Header;
