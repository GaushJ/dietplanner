
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import DietPlanGenerator from './Pages/DietPlanGenerator/DietPlanGenerator';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='diet' element={<DietPlanGenerator />}/>
       
      </Routes>
    </div>
  );
}

export default App;
