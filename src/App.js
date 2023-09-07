import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/signup";
import ClgDetails from "./components/student/StudentRegister/clgDetails";
import StudentDashboard from "./pages/studentDashboard";
import PersistentDrawerLeft from "./components/student/dashboard/drawer";
import LogIn from "./pages/login";
import BasicDetails from "./components/student/StudentRegister/baiscDetails";
import BtechDetails from "./components/student/StudentRegister/educationDetails/btechForm";
import MtechDetails from "./components/student/StudentRegister/educationDetails/mtech";
import ProjectDetails from "./components/student/projectForm/projectForm";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes> */}

      {/* <Route path="/clgDetails" element={<ClgDetails/>}/> */}
      {/* <StudentDashboard>
        <Routes>
          <Route path="/hellow"  />
        </Routes>
      </StudentDashboard> */}
      <StudentDashboard>
        <Routes>
          <Route path="/auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/basic" element={<BasicDetails />} />
          <Route path="/clg" element={<ProjectDetails />} />
          <Route path="/studnet/dashboard">
            <Route path="projects" element={<h1>hellow</h1>} />
          </Route>
        </Routes>
      </StudentDashboard>
    </div>
  );
}

export default App;
