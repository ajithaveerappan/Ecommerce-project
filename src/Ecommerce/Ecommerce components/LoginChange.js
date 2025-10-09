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

const LoginChange = () => {
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
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          backgroundColor: "#d7d7d7",
          padding: "40px",
          minHeight: "100vh",
          gap: "20px",
        }}
      >
        {/* LEFT COLUMN */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            flex: 5, // left takes more width
          }}
        >
          {/* LOGIN BOX */}
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
              LOGIN
            </Typography>
            <Stack direction="row">
              <Stack direction="column" spacing={2}>
                <Typography sx={{ fontWeight: 600 }}>Name Ajitha V</Typography>

                <Typography sx={{ fontSize: "14px" }}>
                  Phone +91 9894023405
                </Typography>

                <Typography
                  sx={{ fontSize: "14px", color: "#2874f0", fontWeight: 400 }}
                >
                  Logout & Sign in to another account
                </Typography>

                <Button
                  sx={{
                    background: "#fb641b",
                    color: "#fff",
                    borderRadius: "2px",
                    fontSize: "16px",
                    height: "48px",
                    width: "100%",
                    fontWeight: 500,
                  }}
                >
                  Continue Checkout
                </Button>
              </Stack>
              <Stack direction="column" spacing={2}>
                <Typography sx={{ fontSize: "14px", color: "#878787" }}>
                  Advantages of our secured login
                </Typography>
                <Typography>Easily track orders,Hassel free Returns</Typography>
              </Stack>
            </Stack>

            <Typography sx={{ fontSize: "12px", color: "#878787" }}>
              Please note that upon clicking "Logout" you will lose all items in
              cart and will be redirected to Flipkart home page.
            </Typography>
          </Box>

          {/* DELIVERY ADDRESS BOX */}
          <Box
            sx={{
              backgroundColor: "#fff",
              p: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ color: "#878787", fontWeight: 500 }}>
              DELIVERY ADDRESS
            </Typography>
          </Box>

          {/* ORDER SUMMARY BOX */}
          <Box
            sx={{
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              p: 2,
            }}
          >
            <Typography
              sx={{
                color: "#878787",
                fontWeight: 500,
              }}
            >
              ORDER SUMMARY
            </Typography>
          </Box>
        </Box>

        {/* RIGHT COLUMN */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // gap: 2,
            flex: 1, // smaller width for right column
          }}
        >
          {/* PRICE DETAILS CARD */}
          {/* <Box
            sx={{
              backgroundColor: "#fff",
              p: 2,
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography sx={{ fontWeight: 600, color: "#878787" }}>
              PRICE DETAILS
            </Typography>
            <Divider />
            <Stack direction="row" justifyContent="space-between">
              <Typography>Price (1 item)</Typography>
              <Typography>₹281</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Platform Fee</Typography>
              <Typography>₹7</Typography>
            </Stack>
            <Divider />
            <Stack direction="row" justifyContent="space-between">
              <Typography sx={{ fontWeight: 600 }}>Total Payable</Typography>
              <Typography sx={{ fontWeight: 600 }}>₹288</Typography>
            </Stack>
            <Typography
              sx={{
                color: "green",
                fontSize: "14px",
                mt: 1,
              }}
            >
              Your Total Savings on this order ₹2,511
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "#878787", mt: 1 }}>
              Save extra ₹30 using 30 Supercoins
            </Typography>
          </Box> */}

          {/* FOOTER */}
          {/* <Box sx={{ color: "#878787", fontSize: "12px" }}>
            <Typography sx={{ fontWeight: 500 }}>
              Safe and Secure Payments. Easy returns. 100% Authentic products.
            </Typography>
            <Typography sx={{ mt: 1 }}>
              By continuing with the order, you confirm that you are above 18
              years of age, and you agree to Flipkart’s Terms of Use and Privacy
              Policy.
            </Typography>
          </Box> */}
        </Box>
      </div>
    </>
  );
};

export default LoginChange;
