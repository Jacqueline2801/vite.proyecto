import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import NavBar from "./components/navbar";
import Productos from "./components/Productos";
import Resumen from "./components/Resumen";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Link to="/about"> about </Link>
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/resumen" element={<Resumen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;


