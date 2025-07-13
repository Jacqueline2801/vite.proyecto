import "./App.css";
import Button from "./components/button";
function App() {
  return (
    <>
  <Button />;
  <Navbar />
  <ItemListContainer />
  <Counter />
   </>
  );
}
export default App;
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>{/* tus rutas */}</Routes>
    </>
  );
}