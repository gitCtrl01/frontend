import {
  Box,
  Button,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import "./collegeForm.css";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import { RegisterClg } from "../../api/clg/clgApi";
import { ProfessorRegister } from "../../api/auht/professorapi";

export default function CollegeDetails() {
  const [Principal, setPrincipal] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    phone: "",
    gender: "",
    password: "",
    college: "",
    university: "",
    roles: ["64f77147d19f3882ee072287"],
  });
  const [clgDetails, setClgDetails] = useState({
    name: "",
    state: "",
    addressL1: "",
    addressL2: "",
    principal: "",
    clgtype: "",
    university: "",
  });

  const handleSubmit = async () => {
    const registerclg = await RegisterClg(clgDetails)
      .catch((err) => {
        throw new Error(err);
      })
      .then(async (data) => {
        if (data.status === 200) {
          await ProfessorRegister(Principal).then((data) => {
            console.log(data);
          });
        }
      });
    // await ProfessorRegister(Principal);
  };
  return (
    <div className="mainDiv">
      <Typography
        variant="h3"
        fontFamily="Inria Serif"
        color="#092F7A"
        style={{ borderBottom: "2px solid" }}
      >
        Principal Details :
      </Typography>
      <br />
      <Box
        component="form"
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <br />
        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">First Name</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="First Name"
              value={Principal.firstName}
              onChange={(e) => {
                setPrincipal({ ...Principal, firstName: e.target.value });
              }}
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
              value={Principal.lastName}
              onChange={(e) => {
                setPrincipal({ ...Principal, lastName: e.target.value });
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
              value={Principal.phone}
              onChange={(e) => {
                setPrincipal({ ...Principal, phone: e.target.value });
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
              value={Principal.emailId}
              onChange={(e) => {
                setPrincipal({ ...Principal, emailId: e.target.value });
                setClgDetails({ ...clgDetails, principal: e.target.value });
              }}
              // style={{ width: "500px" }}
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
              value={clgDetails.name}
              onChange={(e) => {
                setClgDetails({ ...clgDetails, name: e.target.value });
                setPrincipal({ ...Principal, college: e.target.value });
              }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">College Type</Typography>
            <Select
              fullWidth
              value={clgDetails.collegeType}
              onChange={(e) => {
                setClgDetails({ ...clgDetails, clgtype: e.target.value });
              }}
            >
              <MenuItem value="Goverment">Government</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Autonomus">Autonomus</MenuItem>
            </Select>
          </div>
        </div>
        <div className="formElement">
          <Typography variant="h5">University</Typography>
          <TextField
            type="text"
            fullWidth
            name="university"
            label="university"
            style={{ width: "500px" }}
            value={clgDetails.university}
            onChange={(e) => {
              setClgDetails({ ...clgDetails, university: e.target.value });
              setPrincipal({ ...Principal, university: e.target.value });
            }}
          />
        </div>
        <div className="formElement">
          <Typography variant="h5">College Address</Typography>
          <div style={{ display: "flex", gap: "72px" }}>
            <TextField
              type="text"
              fullWidth
              name="Line 1"
              label="Line 1"
              style={{ width: "500px" }}
              value={clgDetails.addressL1}
              onChange={(e) => {
                setClgDetails({ ...clgDetails, addressL1: e.target.value });
              }}
            />

            <TextField
              type="text"
              fullWidth
              name="University"
              label="line 2"
              style={{ width: "500px" }}
              value={clgDetails.addressL2}
              onChange={(e) => {
                setClgDetails({ ...clgDetails, addressL2: e.target.value });
              }}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">State</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="State"
              value={clgDetails.state}
              onChange={(e) => {
                setClgDetails({ ...clgDetails, state: e.target.value });
              }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">District</Typography>
            <TextField
              type="text"
              fullWidth
              name="district"
              label="District"
              value={clgDetails.district}
              onChange={(e) => {
                setClgDetails({ ...clgDetails, district: e.target.value });
              }}
              //   style={{ width: "500px" }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">Password</Typography>
            <TextField
              type="text"
              fullWidth
              name="password"
              label="password"
              value={Principal.password}
              onChange={(e) => {
                setPrincipal({ ...Principal, password: e.target.value });
              }}
              //   style={{ width: "500px" }}
            />
          </div>
        </div>
        <Button type="submit">submit</Button>
        {/* <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">Passing Date</Typography>
            <DatePicker />
          </div>
          <div className="fromElement">
            <Typography variant="h5">Department</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="Department"
              //   style={{ width: "500px" }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">CGPA</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="CGPA"
              //   style={{ width: "500px" }}
            />
          </div>
        </div> */}
      </Box>
    </div>
  );
}
