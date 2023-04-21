import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Header } from "./components/molecules";
import { Home, ProducDetails } from './components/pages'

export default function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inicial" element={<Navigate replace to="/" />} />

        <Route path="/product/:id" element={<ProducDetails />} />

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>
    </BrowserRouter>
  )
}
