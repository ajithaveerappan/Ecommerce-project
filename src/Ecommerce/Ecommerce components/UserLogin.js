import React from "react";
import { AppBar, Container } from "@mui/material";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useDispatch, useSelector } from "react-redux";
import GetAppIcon from "@mui/icons-material/GetApp";
import { closeMenu } from "../EcommerceReducer/MoreoptionReducer";
import { openMenu } from "../EcommerceReducer/MoreoptionReducer";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import { grey } from "@mui/material/colors";
import Stack from "@mui/material/Stack";
import { MobileNumberReducerActions } from "../EcommerceReducer/MobileNumberReducer";
const UserLogin = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.common.white, // ← solid white background
    "&:hover": {
      backgroundColor: theme.palette.common.white[100], // optional: light grey on hover
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg": {
      color: theme.palette.primary.main,
    },
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 36, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  // for "more" options
  //   const StyledMenu = styled((props) => (
  //     <Menu
  //       elevation={0}
  //       anchorOrigin={{
  //         vertical: "bottom",
  //         horizontal: "right",
  //       }}
  //       transformOrigin={{
  //         vertical: "top",
  //         horizontal: "right",
  //       }}
  //       {...props}
  //     />
  //   ))(({ theme }) => ({
  //     "& .MuiPaper-root": {
  //       borderRadius: 6,
  //       marginTop: theme.spacing(1),
  //       minWidth: 180,
  //       color: "rgb(55, 65, 81)",
  //       boxShadow:
  //         "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
  //       "& .MuiMenu-list": {
  //         padding: "4px 0",
  //       },
  //       "& .MuiMenuItem-root": {
  //         "& .MuiSvgIcon-root": {
  //           fontSize: 18,
  //           color: theme.palette.text.secondary,
  //           marginRight: theme.spacing(1.5),
  //           ...theme.applyStyles("dark", {
  //             color: "inherit",
  //           }),
  //         },
  //         "&:active": {
  //           backgroundColor: alpha(
  //             theme.palette.primary.main,
  //             theme.palette.action.selectedOpacity
  //           ),
  //         },
  //       },
  //       ...theme.applyStyles("dark", {
  //         color: theme.palette.grey[300],
  //       }),
  //     },
  //   }));
  //   const dispatch = useDispatch();
  //   const anchorEl = useSelector((state) => state.moreOption.anchorEl);

  //   const open = Boolean(anchorEl);
  //   const handleClick = (event) => {
  //     dispatch(openMenu(event.currentTarget));
  //   };

  //   const handleClose = () => {
  //     dispatch(closeMenu());
  //   };

  //Mobile number validation

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
    e.preventDefault();

    if (!validateMobile(mobileNumber)) {
      dispatch(
        MobileNumberReducerActions.setErrorMessage(
          "Please enter a valid 10-digit mobile number"
        )
      );
      return;
    }

    dispatch(MobileNumberReducerActions.setErrorMessage(""));

    console.log("Logging in with mobile:", mobileNumber);
  };
  return (
    <>
      <div className="Outercontainer">
        <div className="header">
          {/* Line of code for "menu" icon */}
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                {/* line of code for "Flipkart Typography" */}
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  Flipkart
                </Typography>
                {/* //Line of code for "Search" type */}
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search "
                    inputProps={{ "aria-label": "search" }}
                  />
                </Search>
                {/* Line of code for "Login" button */}
                <Button
                  sx={{
                    backgroundColor: (theme) => theme.palette.common.white,
                    color: "blue",
                    width: "140px",
                    borderRadius: 0,
                    marginLeft: 3,
                  }}
                >
                  Login
                </Button>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, ml: 5, fontSize: "16px" }}
                >
                  Become a Seller
                </Typography>
                {/* //Line of code for "More" option */}
                {/* <Button
                  id="demo-customized-button"
                  aria-controls={open ? "demo-customized-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  variant="contained"
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  Options
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  slotProps={{
                    list: {
                      "aria-labelledby": "demo-customized-button",
                    },
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <EditIcon />
                    Edit
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <FileCopyIcon />
                    Duplicate
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <ArchiveIcon />
                    Archive
                  </MenuItem>
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <GetAppIcon />
                    Download
                  </MenuItem>
                </StyledMenu> */}
                <ShoppingCartIcon />
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, ml: 1, fontSize: "16px", fontWeight: 500 }}
                >
                  Cart
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f1f3f6",

            marginLeft: 4,
            height: "620px",
          }}
        >
          <div className="leftlogincontainer">
            <Container
              sx={{
                height: "550px",
                width: "350px",
                backgroundColor: "#2874f0",
                padding: 4,
                fontSize: "15px",
                marginTop: 4,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: "28px",
                  fontWeight: "500",
                  color: "#fff",
                  fontFamily:
                    "Inter, -apple-system, Helvetica, Arial, sans-serif",
                }}
              >
                Login
              </Typography>
              <Typography
                variant="h2"
                sx={{
                  fontSize: "18px",
                  fontWeight: "400",
                  color: "#dbdbdb",
                  marginTop: "26px",
                  lineHeight: "27px",
                  fontFamily:
                    "Inter, -apple-system, Helvetica, Arial, sans-serif",
                }}
              >
                Get access to your Orders, <br></br>Wishlist and Recommendations
              </Typography>
              <Link
                href="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png"
                underline="hover"
              >
                Visit Example
              </Link>
            </Container>
          </div>
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
                      MobileNumberReducerActions.updateMobileNumber(
                        e.target.value
                      )
                    )
                  }
                />
              </Box>
              <div
                className="rightcontainercontent"
                style={{
                  marginTop: "30px",
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#878787",
                  marginLeft: "2px",
                  fontFamily:
                    "Inter, -apple-system, Helvetica, Arial, sans-serif",
                }}
              >
                "By continuing ,you agree to Flipkart's"
                <a className="termname" target="blank" href="/pages/terms">
                  Terms of Use
                </a>
                "and"
                <a
                  className="policyname"
                  target="blank"
                  href="/pages/privacy Policy"
                >
                  Privacy Policy.
                </a>
              </div>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
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
                      onClick: { handleSubmit },
                    }}
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
        </Box>
      </div>
    </>
  );
};

export default UserLogin;
