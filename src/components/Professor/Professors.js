import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./ProfessorForm.css";
import { DatePicker } from "@mui/x-date-pickers";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { ProfessorRegister } from "../../api/auht/professorapi";

export default function ProfessorDetails() {
  const location = useLocation();
  const [profBasic, setProfBasicDetails] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phone: "",
    university: "",
    // gender: "",
    // dob: "",
    // addressL1: "",
    // addressL2: "",
    password: "",
    college: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = ProfessorRegister(profBasic);
    console.log(res);
  };
  return (
    <div className="mainDiv">
      <Typography
        variant="h3"
        fontFamily="Inria Serif"
        color="#092F7A"
        style={{ borderBottom: "2px solid black" }}
      >
        {location.pathname.includes("prof") ? "Professor" : "Principal"} Details
      </Typography>
      <br />
      <Box component="form" className="form" onSubmit={(e) => handleSubmit(e)}>
        <br />
        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">First Name</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="First Name"
              value={profBasic.firstName}
              onChange={(e) =>
                setProfBasicDetails({ ...profBasic, firstName: e.target.value })
              }
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">Last Name</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="Last Name"
              // style={{ width: "500px" }}
              value={profBasic.lastName}
              onChange={(e) => {
                setProfBasicDetails({ ...profBasic, lastName: e.target.value });
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">Mobile Number</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="mobile number"
              value={profBasic.phone}
              onChange={(e) => {
                setProfBasicDetails({ ...profBasic, phone: e.target.value });
              }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">Email Id</Typography>
            <TextField
              type="email"
              fullWidth
              name="University"
              label="Email Id"
              // style={{ width: "500px" }}
              value={profBasic.emailId}
              onChange={(e) => {
                setProfBasicDetails({ ...profBasic, emailId: e.target.value });
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">College Name</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="mobile number"
              value={profBasic.college}
              onChange={(e) => {
                setProfBasicDetails({ ...profBasic, college: e.target.value });
              }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">University</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="University"
              value={profBasic.university}
              onChange={(e) => {
                setProfBasicDetails({
                  ...profBasic,
                  university: e.target.value,
                });
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">Password</Typography>
            <TextField
              type="password"
              fullWidth
              name="University"
              label="password"
              value={profBasic.password}
              onChange={(e) => {
                setProfBasicDetails({ ...profBasic, password: e.target.value });
              }}
              //   style={{ width: "500px" }}
            />
          </div>
        </div>
        <Button variant="outlined" type="submit" size="small">
          Submit
        </Button>
      </Box>
    </div>
  );
}
