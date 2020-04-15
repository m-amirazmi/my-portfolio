import React from "react";
import MainPage from "./components/MainPage";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MyStoryPage from "./components/MyStoryPage";

function App() {
  return (
    <>
      <MainPage />
      <MyStoryPage />
    </>
  );
}

export default App;
