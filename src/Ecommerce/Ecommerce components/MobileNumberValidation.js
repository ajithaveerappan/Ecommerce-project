import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

import Button from "@mui/material/Button";

import { MobileNumberReducerActions } from "../EcommerceReducer/MobileNumberReducer";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";

const MobileNumberValidation = () => {
  const dispatch = useDispatch();
  const mobileNumber = useSelector(
    (state) => state.mobileNumberReducer.mobileNumber
  );
  const errorMessage = useSelector(
    (state) => state.mobileNumberReducer.errorMessage
  );
  const validateMobile = (number) => {
    const regex = /^[6-9]\d{9}$/;
    return regex.test(number);
  };

  const handleSubmit = (e) => {
    if (!validateMobile(mobileNumber)) {
      dispatch(
        MobileNumberReducerActions.updateErrorMessage(
          "Please enter a valid 10-digit mobile number"
        )
      );
      return;
    }

    dispatch(MobileNumberReducerActions.updateErrorMessage(""));
    // switch to homescreen

    dispatch(MobileNumberReducerActions.updateCurrentScreen("otp"));

    console.log("Logging in with mobile:", mobileNumber);
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
        {/* Add your login form or content here */}
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "55ch", marginTop: "10px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Enter Email/Mobile number"
            variant="standard"
            value={mobileNumber}
            onChange={(e) =>
              dispatch(
                MobileNumberReducerActions.updateMobileNumber(e.target.value)
              )
            }
          />
        </Box>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <div
          className="rightcontainercontent"
          style={{
            marginTop: "30px",
            fontSize: "12px",
            fontWeight: 400,
            color: "#878787",
            marginLeft: "2px",
            fontFamily: "Inter, -apple-system, Helvetica, Arial, sans-serif",
          }}
        >
          "By continuing ,you agree to Flipkart's"
          <a className="termname" target="blank" href="/pages/terms">
            Terms of Use
          </a>
          "and"
          <a className="policyname" target="blank" href="/pages/privacy Policy">
            Privacy Policy.
          </a>
        </div>

        <Stack spacing={2} direction="row">
          <Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fb641b",
                color: "#fff",
                width: "67vh",
                padding: "8px", // optional: makes the button taller
                fontSize: "14px",
                marginTop: "20px",
                borderRadius: 1,
              }}
              onClick={handleSubmit}
            >
              Request OTP
            </Button>
          </Box>
        </Stack>
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
              New to Flipkart? Create an account
            </Link>
          </Box>
        </Typography>
      </Container>
    </div>
  );
};
export default MobileNumberValidation;
