import { useLocation } from "react-router-dom";
import StudentAppbar from "../components/student/dashboard/Navbar";
export default function StudentDashboard({ children }) {
  const location = useLocation();

  if (location.pathname.includes("/auth")) {
    return children;
  } else {
    if (location.pathname.includes("/guide")) {
      return children;
    } else {
      return <StudentAppbar>{children}</StudentAppbar>;
    }
  }
}
