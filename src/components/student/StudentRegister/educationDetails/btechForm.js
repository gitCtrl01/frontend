import { Box, TextField, Typography } from "@mui/material";
import "./btechForm.css";
import { DatePicker } from "@mui/x-date-pickers";
import { useContext } from "react";
import { AppContext } from "../../../../context/context";
export default function BtechDetails() {
  const { btech } = useContext(AppContext);
  const { setbtech } = useContext(AppContext);
  return (
    <div className="mainDiv">
      <Typography
        variant="h3"
        fontFamily="Inria Serif"
        color="#092F7A"
        style={{ borderBottom: "2px solid black" }}
      >
        Bachloers Details :
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
              name="college"
              label="College"
              value={btech.college}
              onChange={(e) => {
                setbtech({ ...btech, college: e.target.value });
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
              style={{ width: "500px" }}
              value={btech.University}
              onChange={(e) => {
                setbtech({ ...btech, university: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="formElement">
          <Typography variant="h5">College Address</Typography>
          <div style={{ display: "flex", gap: "72px" }}>
            <TextField
              type="text"
              fullWidth
              name="Address 1"
              label="Line 1"
              style={{ width: "500px" }}
              value={btech.collegeAddress1}
              onChange={(e) => {
                setbtech({ ...btech, collegeAddress1: e.target.value });
              }}
            />

            <TextField
              type="text"
              fullWidth
              name="Address 2"
              label="Line 2"
              style={{ width: "500px" }}
              value={btech.collegeAddress2}
              onChange={(e) => {
                setbtech({ ...btech, collegeAddress2: e.target.value });
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
              value={btech.state}
              onChange={(e) => {
                setbtech({ ...btech, state: e.target.value });
              }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">Pincode</Typography>
            <TextField
              type="text"
              fullWidth
              name="State"
              label="Pincode"
              //   style={{ width: "500px" }}
              value={btech.pincode}
              onChange={(e) => {
                setbtech({ ...btech, pincode: e.target.value });
              }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">District</Typography>
            <TextField
              type="text"
              fullWidth
              name="District"
              label="District"
              //   style={{ width: "500px" }}
              value={btech.district}
              onChange={(e) => {
                setbtech({ ...btech, district: e.target.value });
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">Passing Date</Typography>
            <DatePicker
              onChange={(e) => setbtech({ ...btech, passingDate: e })}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">Programme</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="Department"
              value={btech.programme}
              onChange={(e) => {
                setbtech({ ...btech, programme: e.target.value });
              }}
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
              value={btech.CGPA}
              onChange={(e) => {
                setbtech({ ...btech, CGPA: e.target.value });
              }}
              //   style={{ width: "500px" }}
            />
          </div>
        </div>
      </Box>
    </div>
  );
}
