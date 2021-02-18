import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import { About } from "./pages/About";
import { BasicLayout } from './BasicLayout'
import { Home } from "./pages/Home";
import { Templates } from "./pages/Templates";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <BasicLayout child={Home}/>} exact />
        <Route path="/templates" component={Templates} />
        <Route path="/about-us" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
