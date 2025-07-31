import "./App.css";
import NavBar from "./components/navbar";
import { Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Productos from "./components/Productos";
import Resumen from "./components/Resumen";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Productos />} />
        <Route path="/resumen" element={<Resumen />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;


