import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

import { MobileNumberReducerActions } from "../EcommerceReducer/MobileNumberReducer";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const handleVerify = () => {
    if (otp === "123456") {
      navigate("/Home");
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
          margintop: "31px",
          padding: "76px 35px 16px",
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          // // alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography component="h2" fontSize={15}>
          Please enter the OTP send to <br></br> {mobileNumber}. Change
        </Typography>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch", marginTop: "30px" },
          }}
        >
          <TextField
            id="standard-basic"
            variant="standard"
            marginTop="80px"
            maxlength="4"
            value={otp}
            onChange={handleOtpChange}
          />
        </Box>
        {/* <input type="number" maxLength="9" /> */}
        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#2874f0",
              color: "#fff",
              width: "67vh",
              padding: "8px", // optional: makes the button taller
              fontSize: "14px",
              marginTop: "50px",
              borderRadius: 1,
            }}
            onClick={handleVerify}
          >
            Verify
          </Button>
        </Box>
        <Box
          sx={{
            "& > :not(style)": { m: 1, width: "25ch", marginTop: "30px" },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography fontSize={13} color="grey">
            Not received your code?
          </Typography>
        </Box>
      </Container>
    </div>
  );
};
export default OTPValidation;
