import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

import { MobileNumberReducerActions } from "../EcommerceReducer/MobileNumberReducer";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
const OTPValidation = () => {
  // Get values from Redux store
  const dispatch = useDispatch();

  const mobileNumber = useSelector(
    (state) => state.mobileNumberReducer.mobileNumber
  );
  const otp = useSelector((state) => state.mobileNumberReducer.otp);
  const errorMessage = useSelector(
    (state) => state.mobileNumberReducer.errorMessage
  );
  // Handle OTP input
  const handleOtpChange = (e) => {
    dispatch(MobileNumberReducerActions.updateOTP(e.target.value));
  };

  // Handle Verify button click
  const handleVerify = () => {
    if (otp === "123456") {
      dispatch(MobileNumberReducerActions.updateCurrentScreen("home"));
    } else {
      dispatch(MobileNumberReducerActions.updateErrorMessage("Invalid OTP"));
    }
  };

  return (
    <div className="rightlogincontainer">
      <Container
        sx={{
          height: "550px",
          width: "550px",
          backgroundColor: "#fff",

          marginTop: 4,
          padding: "56px 35px 16px",
        }}
      >
        <Typography variant="h1" component="h2">
          Please enter the OTP send to value{mobileNumber}.Change
        </Typography>
        <input
          type="number"
          maxLength="6"
          placeholder="Enter OTP"
          value={otp}
          onChange={handleOtpChange}
        />
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2874f0",
              color: "#fff",
              width: "67vh",
              padding: "8px", // optional: makes the button taller
              fontSize: "14px",
              marginTop: "20px",
              borderRadius: 1,
              onClick: { handleVerify },
            }}
          >
            Verify
          </Button>
        </Box>
        <Typography variant="body1">
          <Box textAlign="center" width="50%">
            <Link
              to="/next-page"
              underline="hover"
              color="#2874f0"
              fontWeight={500}
              position="absolute"
              bottom="1006px"
              fontSize="15px"
            >
              Not receive your code
            </Link>
          </Box>
        </Typography>
      </Container>
    </div>
  );
};
export default OTPValidation;
