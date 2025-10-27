import React, { useDebugValue, useEffect, useState } from "react";
import { AccordionDetails, AppBar, capitalize, Container } from "@mui/material";
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

import MoreIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Slider from "@mui/material/Slider";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Kurta from "./Kurta.jpg";
import maxi from "./maxi.jpg";
import EditIcon from "@mui/icons-material/Edit";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import Badge from "@mui/material/Badge";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { OrderSummaryReducerActions } from "../EcommerceReducer/OrderSummaryReducer";
import LoginChange from "./LoginChange";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
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
  const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      {...props}
    />
  ))(({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      minWidth: 180,
      color: "rgb(55, 65, 81)",
      boxShadow:
        "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      "& .MuiMenu-list": {
        padding: "4px 0",
      },
      "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
          ...theme.applyStyles("dark", {
            color: "inherit",
          }),
        },
        "&:active": {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity
          ),
        },
      },
      ...theme.applyStyles("dark", {
        color: theme.palette.grey[300],
      }),
    },
  }));
  // Access the items added to cart from Redux store
  const dispatch = useDispatch();
  const addToCartItems = useSelector(
    (state) => state.addToCartReducer.addToCartItems
  );
  //Logic for actual price Calculation
  const actualPriceValue = addToCartItems.reduce((accumulator, items) => {
    return accumulator + items.actualPrice;
  }, 0);

  console.log(actualPriceValue);
  //Logic for discount calculation
  const discountValue = addToCartItems.reduce((accumulator, items) => {
    return accumulator + items.actualPrice - items.discountPrice;
  }, 0);
  console.log(discountValue);
  // coupon value declaration
  const couponValue = 70;
  //platform fee declaration
  const platformFee = 7;
  // logic for total price of the product
  const totalPrice =
    actualPriceValue - discountValue + platformFee - couponValue;
  console.log(totalPrice);

  // logic for price of the product in order summary

  const totalPriceOrderSummary = actualPriceValue - discountValue;
  //Total payabale amount in order summary page

  const totalPayable = totalPriceOrderSummary + platformFee;
  // for place order button ,if the card is empty the place border button is to be disbaled
  const isCartEmpty = addToCartItems.length === 0;

  //Line of code for place order button alert dialog

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const currentLogin = useSelector(
    (state) => state.orderSummaryReducer.currentLogin
  );

  const navigate = useNavigate();
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
                  sx={{ mr: 36 }}
                ></IconButton>
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
              </Toolbar>
            </AppBar>
          </Box>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
          padding: "40px",
          height: "100vh",
          backgroundColor: "#d7d7d7",
          position: "relative",
        }}
      >
        {/* Left Container */}

        <div
          style={{
            display: "flex",
            gap: "20px",

            backgroundColor: "#d7d7d7",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {/* LEFT COLUMN */}
          {currentLogin === true && <LoginChange />}
          {currentLogin === false && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                flex: 3,
              }}
            >
              {/* Login Box */}

              <Box
                sx={{
                  backgroundColor: "#fff",
                  p: 1,
                  // display: "flex",
                  // flexDirection: "column",
                  // gap: 1,
                }}
              >
                <Typography
                  sx={{ textTransform: "uppercase", color: "#878787" }}
                >
                  Login
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack direction="row" spacing={1}>
                    <Typography sx={{ fontWeight: 600 }}>Ajitha V</Typography>
                    <Typography sx={{ fontSize: "14px" }}>
                      +91 9894023405
                    </Typography>
                  </Stack>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "uppercase",
                      border: "1px solid #e0e0e0",
                      color: "#2874f0",
                      fontSize: "14px",
                      backgroundColor: "#fff",
                      fontWeight: "bold",
                      marginBottom: "12px",
                      marginRight: "20px",
                    }}
                    onClick={() =>
                      dispatch(
                        OrderSummaryReducerActions.updatecurrentLogin(true)
                      )
                    }
                  >
                    Change
                  </Button>
                </Stack>
              </Box>

              {/* Delivery Address Box */}
              <Box
                sx={{
                  backgroundColor: "#fff",
                  p: 1,
                  display: "flex",
                  flexDirection: "column",

                  gap: 1,
                }}
              >
                <Typography
                  sx={{ textTransform: "capitalize", color: "#878787" }}
                >
                  Delivery Address
                </Typography>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography sx={{ fontSize: "14px" }}>
                      123, ABC Street, Chennai, Tamil Nadu
                    </Typography>
                  </Stack>
                  <Button
                    variant="outlined"
                    sx={{
                      textTransform: "uppercase",
                      border: "1px solid #e0e0e0",
                      color: "#2874f0",
                      fontSize: "14px",
                      backgroundColor: "#fff",
                      fontWeight: "bold",
                      marginBottom: "12px",
                      marginRight: "20px",
                    }}
                  >
                    Change
                  </Button>
                </Stack>
              </Box>

              {/* Order Summary Box */}
              <Box
                sx={{
                  backgroundColor: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  p: 2,
                }}
              >
                <Typography
                  sx={{
                    backgroundColor: "#2874f0",
                    color: "#fff",
                    p: 2,
                    textTransform: "uppercase",
                    fontWeight: 500,
                  }}
                >
                  Order Summary
                </Typography>

                {addToCartItems.length === 0 ? (
                  <Typography>Your cart is empty.</Typography>
                ) : (
                  addToCartItems.map((item, index) => (
                    <Card key={index} sx={{ display: "flex", gap: 2, p: 1 }}>
                      <CardMedia
                        component="img"
                        sx={{ width: 100 }}
                        image={maxi}
                      />
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                        }}
                      >
                        <Typography sx={{ fontSize: "18px", color: "#212121" }}>
                          {item.productDiscription}
                        </Typography>
                        <Typography
                          variant="h6"
                          color="#878787"
                          fontSize="17px"
                        >
                          Seller:{item.productName}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            mt: 1,
                          }}
                        >
                          <CurrencyRupeeIcon fontSize="small" />
                          <Typography>{item.discountPrice}</Typography>
                          <Typography
                            sx={{
                              textDecoration: "line-through",
                              color: "gray",
                            }}
                          >
                            ₹{item.actualPrice}
                          </Typography>
                          <Typography
                            sx={{ color: "green", fontWeight: "bold" }}
                          >
                            {item.discountPercentage}% off
                          </Typography>
                        </Box>
                        <Button
                          sx={{
                            mt: 1,
                            textTransform: "uppercase",
                            marginRight: "735px",
                            color: "black",
                            fontWeight: "bold",
                            fontSize: "15px",
                          }}
                        >
                          Remove
                        </Button>
                      </Box>
                    </Card>
                  ))
                )}

                {/* Bottom Confirmation */}
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mt={2}
                >
                  <Box display="flex" alignItems="center" gap={1}>
                    <Typography>
                      Order confirmation and email will be sent to
                    </Typography>
                    <TextField
                      id="standard-basic"
                      placeholder="Enter your emailID"
                      variant="standard"
                    />
                  </Box>

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#fb641b",
                      color: "#fff",
                      textTransform: "uppercase",
                    }}
                    onClick={() => navigate("/paymentscreen")}
                  >
                    Continue
                  </Button>
                </Stack>
              </Box>
            </Box>
          )}
          {/* RIGHT COLUMN */}
          {/* <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", // keeps everything left aligned
              // spacing between Price Details and Footer
            }}> */}

          <Box
            sx={{
              backgroundColor: "#fff",
              width: 580,
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography variant="h6" color="#878787">
              Price Details
            </Typography>
            <Divider sx={{ my: 1 }} />
            <Stack direction="row" justifyContent="space-between">
              <Typography>Price ({addToCartItems.length} items)</Typography>
              <Typography>₹{totalPriceOrderSummary}</Typography>
            </Stack>
            {/* <Stack direction="row" justifyContent="space-between">
              <Typography>Discount</Typography>
              <Typography color="success.main">-₹{discountValue}</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Coupons for you</Typography>
              <Typography>-₹{couponValue}</Typography>
            </Stack> */}
            <Stack direction="row" justifyContent="space-between">
              <Typography>Platform Fee</Typography>
              <Typography>₹{platformFee}</Typography>
            </Stack>
            <Divider sx={{ my: 1 }} />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h6" padding="10px" fontWeight="bold">
                Total Payable
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                ₹{totalPayable}
              </Typography>
            </Stack>
            <Divider sx={{ my: 1 }} />
            <Stack
              direction="row"
              justifyContent="space-between"
              padding="15px"
              color="#388e3c"
              fontWeight="bold"
            >
              <Typography>Your total savings on this order</Typography>
              <Typography>-₹{discountValue}</Typography>
            </Stack>
            <Stack
              direction="row"
              justifyContent="flex-start"
              padding="14px 23px"
              color="black"
              fontWeight="bold"
              backgroundColor="#fffbf6"
            >
              <Typography>Save extra 30 using 30 supercoins</Typography>
            </Stack>
          </Box>
        </div>
        {/* <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          width="100%"
          mt={2}
        >
          <Typography>Safe and secure points</Typography>
        </Box> */}
      </div>
    </>
  );
};

export default OrderSummary;
