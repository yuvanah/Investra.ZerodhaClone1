import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
 import { ToastContainer, toast } from 'react-toastify';
//  import Login from "./components/Login";
// import Signup from "./components/Signup";


function App() {
  return (
    <Routes>
      
      
         <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;