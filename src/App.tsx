import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

import { About } from "./pages/About";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Templates } from "./pages/Templates";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/templates" component={Templates} />
          <Route path="/about-us" component={About} />
        </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
