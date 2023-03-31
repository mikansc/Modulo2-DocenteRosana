import React from "react";

import "./App.css";

import { Header } from "./components/molecules";
import {
  ComponentsRender,
  CondicionalRender,
  ListRender,
  Props,
  Children,
  PropsChildren,
  ValoresPadrao,
  PropTypes
} from "./components/organisms";

function App() {
  return (
    <>
      <Header />

      <main>
        <ComponentsRender />

        <ListRender />

        <CondicionalRender />

        <Props />

        <Children />

        <PropsChildren />

        <ValoresPadrao />

        <PropTypes />

      </main>

      {/* colocaria um rodapé */}
    </>
  );
}

export default App;
