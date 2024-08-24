import "./App.css";
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path="/" elements={<Home/>} />
        <Route path="/login" elements={<Login/>} />
        <Route path="/signup" elements={<Signup/>} />
        <Route path="/dashboard" elements={<Dashboard/>} />
      </Routes>

    </div>
            
  )
}

export default App;
