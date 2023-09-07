import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MenuItem, Radio } from "@mui/material";
import GenderRadio from "../../common/radio";
import { DateCalendar, DatePicker } from "@mui/x-date-pickers";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function BasicDetails() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
          }}
        >
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap={4}
          >
            {/* <Grid item md={8} xs={12}>
                <Typography variant="h6">Name</Typography>
              </Grid> */}

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <TextField
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  size="large"
                />

                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <Grid container spacing={3}>
              <Grid item xs={8} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="Phone Number"
                  label="Phone Number"
                  type="text"
                  id="PhoneNumber"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <div style={{ display: "flex", gap: "10px" }}>
              <TextField
                select
                style={{ width: "250px", height: "50px" }}
                label="gender"
                xs={12}
                sm={6}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </TextField>
              <DatePicker />
              {/* <TextField select label="State" style={{ width: "250px" }}>
                <MenuItem value="male">Maharashtra</MenuItem>
                <MenuItem value="female">Gujrat</MenuItem>
              </TextField> */}
            </div>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="Address 1"
                label="Address 1"
                type="text"
                id="Address 1"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                required
                fullWidth
                name="Address 2"
                label="Address 2"
                type="text"
                id="password"
              />
            </Grid>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <TextField
                  name="Pincode"
                  required
                  fullWidth
                  id="pincode"
                  label="Pincode"
                  autoFocus
                  size="large"
                />

                <TextField
                  required
                  fullWidth
                  id="District"
                  label="District"
                  name="District"
                />
              </div>
            </div>
            {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
