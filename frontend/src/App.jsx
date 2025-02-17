import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <nav>Navbar</nav>
      <Outlet />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
