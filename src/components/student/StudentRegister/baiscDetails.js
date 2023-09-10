import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button, MenuItem } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

import { AppContext } from "../../../context/context";

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function BasicDetails() {
  const { setBasicFormsDetails } = React.useContext(AppContext);
  const { BasicFormDetails } = React.useContext(AppContext);
  function handleNext() {}

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
            // onSubmit={handleSubmit}
            display="flex"
            flexDirection="column"
            gap={4}
          >
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
                  value={BasicFormDetails.firstName}
                  onChange={(e) => {
                    setBasicFormsDetails({
                      ...BasicDetails,
                      firstName: e.target.value,
                    });
                  }}
                />

                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  value={BasicDetails.lastName}
                  onChange={(e) => {
                    setBasicFormsDetails({
                      ...BasicFormDetails,
                      lastName: e.target.value,
                    });
                  }}
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
                  value={BasicFormDetails.emailId}
                  onChange={(e) => {
                    setBasicFormsDetails({
                      ...BasicFormDetails,
                      emailId: e.target.value,
                    });
                  }}
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
                  // autoComplete="new-password"
                  value={BasicFormDetails.phone}
                  onChange={(e) => {
                    setBasicFormsDetails({
                      ...BasicFormDetails,
                      phone: e.target.value,
                    });
                  }}
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
                value={BasicFormDetails.gender}
                onChange={(e) => {
                  setBasicFormsDetails({
                    ...BasicFormDetails,
                    gender: e.target.value,
                  });
                }}
              >
                <MenuItem value={"male"}>Male</MenuItem>
                <MenuItem value={"female"}>Female</MenuItem>
              </TextField>
              <DatePicker
                value={BasicFormDetails.dob}
                onChange={(e) => {
                  setBasicFormsDetails({ ...BasicFormDetails, dob: e });
                }}
              />
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
                // autoComplete="new-password"
                value={BasicFormDetails.addressL1}
                onChange={(e) => {
                  setBasicFormsDetails({
                    ...BasicFormDetails,
                    addressL1: e.target.value,
                  });
                }}
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
                value={BasicFormDetails.addressL2}
                onChange={(e) => {
                  setBasicFormsDetails({
                    ...BasicFormDetails,
                    addressL2: e.target.value,
                  });
                }}
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
                  value={BasicFormDetails.pincode}
                  onChange={(e) => {
                    setBasicFormsDetails({
                      ...BasicFormDetails,
                      pincode: e.target.value,
                    });
                  }}
                />

                <TextField
                  required
                  fullWidth
                  id="District"
                  label="District"
                  name="District"
                  value={BasicFormDetails.District}
                  onChange={(e) => {
                    setBasicFormsDetails({
                      ...BasicFormDetails,
                      district: e.target.value,
                    });
                  }}
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
            {/* <button
              onClick={() => {
                Store.dispatch(setBasic(BasicFormsDetails ));
              }}
            >
              hellow
            </button> */}
            {/* <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button> */}
            {/* <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid> */}
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </ThemeProvider>
  );
}
