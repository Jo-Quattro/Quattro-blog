import "./App.css";
import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="relative bg-mainTheme min-h-[100vh]">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
