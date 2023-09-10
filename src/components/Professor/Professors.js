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

export default function ProfessorDetails() {
  const location = useLocation();
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
      <Box
        component="form"
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("hellow");
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
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">College Type</Typography>
            <Select fullWidth>
              <MenuItem value="Goverment">Government</MenuItem>
              <MenuItem value="Private">Private</MenuItem>
              <MenuItem value="Autonomus">Autonomus</MenuItem>
            </Select>
          </div>
        </div>

        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">Password</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="District"
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
