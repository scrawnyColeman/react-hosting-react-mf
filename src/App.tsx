import React from "react";
import LocalCard from "./components/LocalCard";
import MicrofrontendCard from "./components/MicrofrontendReactCard";

import "./index.css";

const App = () => (
  <div className="container">
    <LocalCard />
    <MicrofrontendCard />
    <LocalCard />
  </div>
);

export default App;
