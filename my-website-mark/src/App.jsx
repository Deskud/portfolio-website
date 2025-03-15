import { useState, useEffect } from "react";
import LoginRegister from "./Components/Login-Register/LoginRegister";
import Header from "./Components/Header/Header";
import axios from "axios";
function App() {
  return (
    <div>
      <Header />
      <LoginRegister />
    </div>
  );
}
export default App
