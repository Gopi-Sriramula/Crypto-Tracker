import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/Home";
import DashboardPage from "./Pages/Dashboard";
import CoinPage from "./Pages/CoinPage";
import ComparePage from "./Pages/ComparePage";
const App = function () {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage/>} />
          <Route path="/compare" element={<ComparePage/>} />
        </Routes>
      </HashRouter>
    </div>
  );
};
export default App;