import React from "react";
import "./App.css";

import { Header } from "./components/molecules";
import {
  ComponentsRender,
  CondicionalRender,
  ListRender,
} from "./components/organisms";

function App() {
  return (
    <>
      <Header />

      <main>
        <ComponentsRender />

        <ListRender />

        <CondicionalRender />
      </main>

      {/* rodapé */}
    </>
  );
}

export default App;
