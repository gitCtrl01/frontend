import { Box, TextField, Typography } from "@mui/material";
import "./btechForm.css";
import { DatePicker } from "@mui/x-date-pickers";
export default function BtechDetails() {
  return (
    <div className="mainDiv">
      <Typography
        variant="h3"
        fontFamily="Inria Serif"
        color="#092F7A"
        style={{ borderBottom: "2px solid" }}
      >
        B.Tech Details :
      </Typography>
      <br />
      <Box component="form" className="form">
        <br />
        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">College</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="College"
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">University</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="University"
              style={{ width: "500px" }}
            />
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
              label="Line 2"
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

        <div style={{ display: "flex", gap: "72px" }}>
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
        </div>
      </Box>
    </div>
  );
}
