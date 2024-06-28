
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Userlogin from "./pages/user_login";
import Signup from "./pages/signup";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Userlogin />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
