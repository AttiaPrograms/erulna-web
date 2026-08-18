import {BrowserRouter, Routes, Route} from "react-router-dom";
import DashboardPage from './Pages/DashboardPage';
import QuotesPage from './Pages/QuotesPage';
import './index.css'
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"element={<DashboardPage/>}/>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/quotes" element={<QuotesPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;