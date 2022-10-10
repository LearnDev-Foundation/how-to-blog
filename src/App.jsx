import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AllPost, OnePost, Home, Search } from "./container";
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <HashRouter>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<AllPost />} path="/allposts" />
          <Route element={<OnePost />} path="/:slug" />
          <Route element={<Search />} path="/search" />
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;
