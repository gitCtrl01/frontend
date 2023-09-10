import { Box, MenuItem, Select, TextField, Typography } from "@mui/material";
import "./collegeForm.css";
import { DatePicker } from "@mui/x-date-pickers";

export default function CollegeDetails() {
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
      <Box component="form" className="form">
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

        <div className="formElement">
          <Typography variant="h5">College Address</Typography>
          <div style={{ display: "flex", gap: "72px" }}>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="Line 1"
              style={{ width: "500px" }}
            />

            <TextField
              type="text"
              fullWidth
              name="University"
              label="line 2"
              style={{ width: "500px" }}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">State</Typography>
            <TextField type="text" fullWidth name="University" label="State" />
          </div>
          <div className="fromElement">
            <Typography variant="h5">Pincode</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="Pincode"
              //   style={{ width: "500px" }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">District</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="District"
              //   style={{ width: "500px" }}
            />
          </div>
        </div>

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
