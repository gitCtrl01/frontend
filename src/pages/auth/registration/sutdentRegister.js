import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./studentRegister.css";
import BasicDetails from "../../../components/student/StudentRegister/baiscDetails";
import ClgDetails from "../../../components/student/StudentRegister/clgDetails";
import BtechDetails from "../../../components/student/StudentRegister/educationDetails/btechForm";
import MtechDetails from "../../../components/student/StudentRegister/educationDetails/mtech";
import ProjectForm from "../../../components/student/projectForm/projectForm";
import { AppContext } from "../../../context/context";
import StudentRetisterApi from "../../../api/auht/studentRegister";

export default function StudentRegister() {
  const [activeStep, setActiveStep] = React.useState(0);
  const z = React.useContext(AppContext);
  const steps2 = [
    { label: "Basic Details", element: <BasicDetails /> },
    {
      label: "Clgdetails",
      element: (
        <>
          <BtechDetails />
          <MtechDetails />
        </>
      ),
    },
    // { label: "Project", element: <ProjectForm /> },
  ];
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleSubmit = async () => {
    const body = { ...z.BasicFormDetails, bachloers: z.btech, masters: z.mtech };
    console.log(body.lastName);
    const res =  StudentRetisterApi(body);
    console.log(res);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }} className="mainDiv">
      <Stepper activeStep={activeStep}>
        {steps2.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{label.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps2.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              pt: 2,
              gap: 15,
            }}
          >
            {steps2[activeStep].element}
            <div style={{ display: "flex" }}>
              {" "}
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                onClick={
                  activeStep === steps2.length - 1 ? handleSubmit : handleNext
                }
              >
                {activeStep === steps2.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
