import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { AllPost, OnePost, Home, Search } from "./container";
import './App.scss';
import CookieConsent from "react-cookie-consent"

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

      <CookieConsent>This site uses cookies. By continuing to use this website, you agree to their use.</CookieConsent>
    </div>
  )
}

export default App;
