import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { allPost, onePost } from "./components/index";

const app = () => {
  return (
    <BrowserRouter>
      <div>
        <Route component={allPost} path="/" exact />
        <Route component={onePost} path="/:slug" />
      </div>
    </BrowserRouter>
  )
}