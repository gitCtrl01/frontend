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
    pincode: "",
    district: "",
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
    department: "",
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
    department: "",
    currentSem: "",
    CGPA: "",
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
