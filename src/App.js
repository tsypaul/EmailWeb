import React from "react";

import "./App.css";

import { GlobalProvider } from "./context/GlobalState";

import { Navbar } from "./components/Navbar";
import { ContentPane } from "./components/ContentPane";

const App = () => {
  return (
    <GlobalProvider>
      <Navbar />
      <ContentPane />
    </GlobalProvider>
  );
};

export default App;
