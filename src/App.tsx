import React, {useLayoutEffect} from "react";
import { BrowserRouter, Switch, Route, useLocation } from "react-router-dom";
import "./App.css";

import { About } from "./pages/About";
import { BasicLayout } from "./BasicLayout";
import { Contact } from "./pages/Contact";
import { DetailTemplate } from "./pages/DetailTemplate";
import { Home } from "./pages/Home";
import { Templates } from "./pages/Templates";
import { OnlyHeaderLayout } from "./OnlyHeaderLayout";

function ScrollToTop () {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Switch>
        <Route path="/" render={() => <BasicLayout children={Home} />} exact />
        <Route
          path="/templates"
          render={() => <BasicLayout children={Templates} />}
        />
        <Route path="/about-us" render={() => <BasicLayout children={About} />} />
        <Route path="/contact" render={() => <BasicLayout children={Contact} />} />
        <Route
          path="/template/:id"
          render={() => <OnlyHeaderLayout children={DetailTemplate} />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
