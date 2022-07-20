import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllPost, OnePost, Home } from "./container";
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<AllPost />} path="/allposts" />
          <Route element={<OnePost />} path="/:slug" />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;