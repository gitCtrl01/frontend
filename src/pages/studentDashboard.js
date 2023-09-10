import { useLocation } from "react-router-dom";
import StudentAppbar from "../components/common/dashboard/Navbar";
import ProfessorDashboard from "../components/common/dashboard/professorDashboard";
import UniversityDashboard from "../components/common/dashboard/University";
export default function StudentDashboard({ children }) {
  const location = useLocation();

  if (location.pathname.includes("/auth")) {
    return children;
  } else {
    if (location.pathname.includes("/guide")) {
      return children;
    } else {
      if (location.pathname.includes("/student")) {
        return <StudentAppbar>{children}</StudentAppbar>;
      } else {
        if (location.pathname.includes("/professor")) {
          return <ProfessorDashboard>{children}</ProfessorDashboard>;
        } else {
          if (location.pathname.includes("/uni")) {
            return <UniversityDashboard>{children}</UniversityDashboard>;
          }
        }
      }
    }
  }
}
