import { Card, CardContent, Paper, Typography } from "@mui/material";
import "./universityDashboard.css";
export default function UniDashboard() {
  return (
    <Paper elevation={2} className="mainDiv">
      <Card
        variant="elevation"
        sx={{ maxWidth: 275, minHeight: 275, background: "#d1f2fe" }}
      >
        <center>
          {" "}
          <CardContent>
            <Typography variant="h5" fontFamily="ArialBlack">
              Colleges
            </Typography>
          </CardContent>
        </center>
      </Card>
      <Card
        variant="elevation"
        sx={{ maxWidth: 275, minHeight: 275, background: "#fef7cc" }}
      >
        <center>
          {" "}
          <CardContent>
            <Typography variant="h5" fontFamily="ArialBlack">
              Projects
            </Typography>
          </CardContent>
        </center>
      </Card>
      <Card
        variant="elevation"
        sx={{ maxWidth: 275, minHeight: 275, background: "#fef7cc" }}
      >
        <center>
          {" "}
          <CardContent>
            <Typography variant="h5" fontFamily="ArialBlack">
              Projects
            </Typography>
          </CardContent>
        </center>
      </Card>
    </Paper>
  );
}
