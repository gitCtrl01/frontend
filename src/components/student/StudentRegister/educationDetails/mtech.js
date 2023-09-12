import { Box, TextField, Typography } from "@mui/material";
import "./btechForm.css";
import { DatePicker } from "@mui/x-date-pickers";
import { AppContext } from "../../../../context/context";
import { useContext } from "react";
export default function MtechDetails() {
  const { mtech } = useContext(AppContext);
  const { setmtech } = useContext(AppContext);
  return (
    <div className="mainDiv">
      <Typography
        variant="h3"
        fontFamily="Inria Serif"
        color="#092F7A"
        style={{ borderBottom: "2px solid" }}
      >
        Master's Details :
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
              value={mtech.college}
              onChange={(e) => {
                setmtech({ ...mtech, college: e.target.value });
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
              value={mtech.University}
              onChange={(e) => {
                setmtech({ ...mtech, university: e.target.value });
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
              name="Address"
              label="Line 1"
              style={{ width: "500px" }}
              value={mtech.collegeAddress1}
              onChange={(e) => {
                setmtech({ ...mtech, collegeAddress1: e.target.value });
              }}
            />

            <TextField
              type="text"
              fullWidth
              name="Address 2"
              label="Line 2"
              style={{ width: "500px" }}
              value={mtech.collegeAddress2}
              onChange={(e) => {
                setmtech({ ...mtech, collegeAddress2: e.target.value });
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
              value={mtech.state}
              onChange={(e) => {
                setmtech({ ...mtech, state: e.target.value });
              }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">Pincode</Typography>
            <TextField
              type="text"
              fullWidth
              name="Pincode"
              label="Pincode"
              //   style={{ width: "500px" }}
              value={mtech.pincode}
              onChange={(e) => {
                setmtech({ ...mtech, pincode: e.target.value });
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
              value={mtech.district}
              onChange={(e) => {
                setmtech({ ...mtech, district: e.target.value });
              }}
              //   style={{ width: "500px" }}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">Joining Date</Typography>
            <DatePicker
              onChange={(e) => setmtech({ ...mtech, passingDate: e })}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">Programme</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="Semester 1"
              value={mtech.programme}
              onChange={(e) => {
                setmtech({ ...mtech, programme: e.target.value });
              }}
              //   style={{ width: "500px" }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">Current Sem</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="Semester 2"
              value={mtech.currentSem}
              onChange={(e) => {
                setmtech({ ...mtech, currentSem: e.target.value });
              }}
              //   style={{ width: "500px" }}
            />
          </div>
        </div>
        <div style={{ display: "flex", gap: "120px" }}>
          <div className="fromElement">
            <Typography variant="h5">CGPA 1</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="Semester 1"
              //   style={{ width: "500px" }}
              value={mtech.CGPA1}
              onChange={(e) => {
                setmtech({ ...mtech, CGPA1: e.target.value });
              }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">CGPA 2</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              label="Semester 2"
              value={mtech.CGPA2}
              onChange={(e) => {
                setmtech({ ...mtech, CGPA2: e.target.value });
              }}
              //   style={{ width: "500px" }}
            />
          </div>
        </div>
      </Box>
    </div>
  );
}
