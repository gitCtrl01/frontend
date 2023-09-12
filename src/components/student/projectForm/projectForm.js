import { Box, TextField, Typography } from "@mui/material";
import "./btechForm.css";
import { DatePicker } from "@mui/x-date-pickers";
import { TextareaAutosize } from "@mui/material";
import { useContext } from "react";
import { AppContext } from "../../../context/context";

export default function ProjectForm() {
  const { projectDetails } = useContext(AppContext);
  const { setProjectDetails } = useContext(AppContext);
  return (
    <div className="mainDiv">
      <Typography
        variant="h3"
        fontFamily="Inria Serif"
        color="#092F7A"
        style={{ borderBottom: "2px solid" }}
      >
        Project Details :
      </Typography>
      <br />
      <Box component="form" className="form">
        <br />
        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">Department</Typography>
            <TextField
              type="text"
              fullWidth
              name="Department"
              value={projectDetails.department}
              onChange={(e) => {
                setProjectDetails({
                  ...projectDetails,
                  department: e.target.value,
                });
              }}
            />
          </div>
          <div className="fromElement">
            <Typography variant="h5">Topic</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"
              style={{ width: "500px" }}
              value={projectDetails.topic}
              onChange={(e) => {
                setProjectDetails({
                  ...projectDetails,
                  topic: e.target.value,
                });
              }}
            />
          </div>
        </div>

        <div style={{ display: "flex", gap: "72px" }}>
          <div className="fromElement">
            <Typography variant="h5">Year of Publication</Typography>
            <DatePicker />
          </div>
          <div className="fromElement">
            <Typography variant="h5">Organization of publication</Typography>
            <TextField
              type="text"
              fullWidth
              name="University"

              //   style={{ width: "500px" }}
            />
          </div>
        </div>
        <div className="fromElement">
          <Typography variant="h5">Description</Typography>
          <TextareaAutosize
            minRows={15}
            style={{ width: "850px" }}
            //   style={{ width: "500px" }}
          />
        </div>
      </Box>
    </div>
  );
}
