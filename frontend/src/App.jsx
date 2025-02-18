import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <Header />
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
