import { HashRouter,Routes,Route } from "react-router-dom"
import "./index.css"
import HomePage from "./pages/HomePage";
import DashBoard from "./pages/DashBoard";
import CoinPage from "./pages/coinPage";
import Watchlist from "./pages/Watchlist";
import ComparePage from "./pages/compare";
const App = function(){
  return <div>
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/coin/:id" element={<CoinPage/>}/>
        <Route path="/watchlist" element={<Watchlist/>}/>
        <Route path="/compare" element={<ComparePage/>}/>
      </Routes>
    </HashRouter>
  </div>
}
export default App;