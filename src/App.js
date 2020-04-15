import React from "react";
import MainPage from "./components/MainPage";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import MyStoryPage from "./components/MyStoryPage";
import MyProjectPage from "./components/MyProjectPage";

function App() {
  return (
    <>
      <MainPage />
      <MyStoryPage />
    </>
  );
}

export default App;
