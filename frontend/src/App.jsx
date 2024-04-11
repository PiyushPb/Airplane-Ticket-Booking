import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import "./App.css";
import AppRoutes from "./Routes/AppRoutes";
import Admin from "./admin/Admin";

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
