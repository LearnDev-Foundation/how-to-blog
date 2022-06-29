import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllPost, OnePost } from "./components/index";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AllPost />} path="/" exact />
        <Route element={<OnePost />} path="/:slug" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;