import { createContext, useState } from "react";

export const AppContext = createContext(null);

export default function AppProvider({ children }) {
  const [BasicFormDetails, setBasicFormsDetails] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phone: "",
    gender: "",
    dob: "",
    addressL1: "",
    addressL2: "",
    pinCode: "",
    district: "",
    password: "",
    roles: ["64f77575d6028319c8086184"],
  });
  const [btech, setbtech] = useState({
    college: "",
    university: "",
    collegeAddress1: "",
    collegeAddress2: "",
    state: "",
    pincode: "",
    district: "",
    passingDate: "",
    programme: "",
    CGPA: "",
  });
  const [mtech, setmtech] = useState({
    college: "",
    university: "",
    collegeAddress1: "",
    collegeAddress2: "",
    state: "",
    pincode: "",
    district: "",
    passingDate: "",
    programme: "",
    currentSem: "",
    CGPA1: "",
    CGPA2: "",
  });
  const [projectDetails, setProjectDetails] = useState({
    department: "",
    topic: "",
    yearofPublication: "",
    description: "",
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AppContext.Provider
      value={{
        BasicFormDetails,
        setBasicFormsDetails,
        btech,
        setbtech,
        mtech,
        setmtech,
        projectDetails,
        setProjectDetails,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
