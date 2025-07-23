import "./App.css";
import { Outlet } from "react-router";
import { Header } from "./components/Header";

function App() {
  return (
    <main className="relative bg-amber-100 ">
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
