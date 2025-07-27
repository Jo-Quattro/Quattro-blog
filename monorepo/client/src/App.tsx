import "./App.css";
import { Outlet } from "react-router";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="relative bg-main-theme/30 min-h-[100vh]">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
