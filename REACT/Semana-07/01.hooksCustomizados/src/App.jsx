import { Text } from "components/atoms";
import { Header } from "./components/molecules";
import {
  Counter, Counter1, Counter2, Counter3,
  InputExample, InputExample1,
  FormExample, FormExample1, FormExample2,
  Fetch, Fetch1, Fetch2, Fetch3,
} from "./components/organisms";

function App() {
  return (
    <>
      <Header />

      <main>
        <Text subtitle="Custom Hooks" />

        <Fetch3 />
      </main>
    </>
  );
}

export default App;
