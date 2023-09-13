import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Register from "./pages/signup";
import ClgDetails from "./components/student/StudentRegister/clgDetails";
import StudentDashboard from "./pages/studentDashboard";
import PersistentDrawerLeft from "./components/common/dashboard/drawer";
import BasicDetails from "./components/student/StudentRegister/baiscDetails";
import BtechDetails from "./components/student/StudentRegister/educationDetails/btechForm";
import MtechDetails from "./components/student/StudentRegister/educationDetails/mtech";
import CollegeDetails from "./components/college/collegeForm";
import ProfessorDetails from "./components/Professor/Professors";
import ProfEducationForm from "./pages/professors/profEducation";
import ProjectForm from "./components/student/projectForm/projectForm";
import UniDashboard from "./pages/university/universityDashboard";
import LogIn from "./pages/auth/login";
import StudentRegister from "./pages/auth/registration/sutdentRegister";
import StudentProjects from "./pages/student/studentProjects";
import ApplicationTable from "./pages/professors/application";

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

      {/* <Route path="/clgDetails" element={<ClgDetails/>}/> */}

      <StudentDashboard>
        <Routes>
          <Route path="/auth">
            <Route path="login" element={<LogIn />} />
            <Route path="register" element={<Register />} />
            <Route path="studentRegister" element={<StudentRegister />} />
            <Route path="prof" element={<ProfessorDetails />} />
            <Route path="principal" element={<CollegeDetails />} />
          </Route>
          {/* <Route path="/basic" element={<BasicDetails />} />
          <Route path="/clg" element={<ProfessorDetails />} /> */}
          <Route path="/student">
            <Route path="projects" element={<StudentProjects />} />
          </Route>
          <Route path="/professor">
            <Route path="education" element={<ProfEducationForm />} />
            <Route path="papers" element={<ProjectForm />} />
            <Route path="application" element={<ApplicationTable />} />
          </Route>
          <Route path="/university" element={<UniDashboard />}></Route>
        </Routes>
      </StudentDashboard>
    </div>
  );
}

export default App;
