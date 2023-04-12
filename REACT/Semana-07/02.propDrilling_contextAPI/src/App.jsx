import { Header } from './components/molecules'
import { Composition, ContextAPI, PropDrilling } from './components/organisms';
import { ThemeProvider } from './contexts/theme'

export default function App() {
  return (
    <ThemeProvider>
      <Header />

      <main>

        {/* <PropDrilling /> */}

        {/* <Composition /> */}

        <ContextAPI />

      </main>
    </ThemeProvider>
  );
}
