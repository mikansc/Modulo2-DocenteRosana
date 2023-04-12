import { useState, useEffect } from "react";
import { Text } from "components/atoms";
import { Header } from "./components/molecules";
import {
  Counter, Counter1, Counter2, Counter3,
  InputExample, InputExample1,
  FormExample, FormExample1, FormExample2,
  Fetch, Fetch1, Fetch2, Fetch3,
} from "./components/organisms";

function App() {
  // const [cachorros, setCachorros] = useState([]);
  // console.log(cachorros);

  // const fetchCachorros = async () => {
  //   const resposta = await fetch('http://localhost:3003/cachorros');
  //   const json = await resposta.json();
  //   setCachorros(json);
  // }

  // useEffect(() => {
  //   // fetch('http://localhost:3003/cachorros')
  //   //   .then((response) => response.json())
  //   //   .then((json) => setCachorros(json));
  //   fetchCachorros();
  // }, [])

  return (
    <>
      <Header />

      <main>
        <Text subtitle="Custom Hooks" />

        <Fetch />
      </main>
    </>
  );
}

export default App;
