import React, { useDebugValue, useEffect, useState } from "react";
import { AccordionDetails, AppBar, Container } from "@mui/material";
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
import { useNavigate } from "react-router-dom";
const CheckOutPage = () => {
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
  // For navigation purpose
  const navigate = useNavigate();
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
            flexDirection: "column",
            gap: 16,
            width: "900px",
            marginRight: "10px",
          }}
        >
          {/* Upper Left Box */}
          <div
            style={{
              height: "75px",
              backgroundColor: "#fff",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <Typography
              sx={{
                fontSize: "16px",
                textTransform: "capitalize",
                padding: 2,
              }}
            >
              From Saved Address
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              position="absolute"
              right="50%"
              top="60px"
              backgroundColor="white"
              color="blue"
              border={grey}
            >
              <Button variant="outlined">Enter delivery pincode</Button>
            </Stack>
          </div>

          {/* Lower Left Box */}
          <div
            style={{
              flex: 1,
              backgroundColor: "#fff",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <div style={{ padding: "2rem" }}>
              <Typography variant="h4" gutterBottom>
                Your Cart is empty
              </Typography>

              {/* If cart is empty */}
              {addToCartItems.lenghth === 0 ? (
                <Typography variant="body1">Your cart is empty.</Typography>
              ) : (
                // Show all items in the cart
                addToCartItems.map((item, index) => (
                  <Card key={index} sx={{ display: "flex", mb: 2 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image={maxi}
                    />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent>
                        <Typography variant="h6">{item.productName}</Typography>
                        <Typography variant="body2">
                          {item.productDiscription}
                        </Typography>
                        <Box sx={{ display: "flex", marginTop: 2 }}>
                          <CurrencyRupeeIcon fontSize="small"></CurrencyRupeeIcon>
                          <Typography>{item.discountPrice}</Typography>
                          <CurrencyRupeeIcon fontSize="small"></CurrencyRupeeIcon>
                          <Box display="flex" alignItems="center" gap={1}>
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
                        </Box>
                        <Stack direction="row" spacing={2} mt={4}>
                          <Button
                            sx={{
                              fontWeight: 700,
                              color: "black",
                              fontSize: "16px",
                            }}
                          >
                            Save For Later
                          </Button>
                          <Button
                            sx={{
                              fontWeight: 700,
                              color: "black",
                              fontSize: "16px",
                            }}
                            onClick={handleClickOpen}
                          >
                            Remove
                          </Button>
                          <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              {"Remove Item"}
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                Are you sure you want to remove this item?
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={handleClose}>Cancel</Button>
                              <Button
                                variant="contained"
                                onClick={handleClose}
                                autoFocus
                              >
                                Remove
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </Stack>
                      </CardContent>
                    </Box>
                  </Card>
                ))
              )}
            </div>
            {/* Footer: Place Order button placed at the end of left container */}
            <div style={{ marginTop: 10 }}>
              <Stack
                direction="row"
                spacing={2}
                display="flex"
                justifyContent="flex-end"
              >
                <Button
                  variant="contained"
                  sx={{
                    fontWeight: 700,
                    width: "30%",
                    py: 1.25,
                    textTransform: "none",
                    backgroundColor: "#fb641b;",
                    color: "#fff",
                  }}
                  disabled={isCartEmpty}
                  // place order handler (navigate to payment or dispatch action)

                  onClick={() => navigate("/OrderSummary")}
                >
                  Place Order
                </Button>
              </Stack>
            </div>
          </div>
        </div>

        {/* Right Container */}
        <div
          style={{
            height: "400px",
            width: "480px",
            backgroundColor: "#fff",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <Typography variant="h6" gutterBottom>
            Price Details
          </Typography>
          <Divider sx={{ my: 2 }} />

          {/* Rows for each line */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography>Price ({addToCartItems.length} items)</Typography>
            <Typography>₹{actualPriceValue}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography>Discount</Typography>
            <Typography color="success.main">-₹{discountValue}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography>Coupons for you</Typography>
            <Typography>-₹{couponValue}</Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 1,
            }}
          >
            <Typography>Platform Fee</Typography>
            <Typography>₹{platformFee}</Typography>
          </Box>

          {/* Divider before total */}
          <Divider sx={{ my: 2 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6">Total Amount</Typography>
            <Typography variant="h6">₹{totalPrice}</Typography>
          </Box>
        </div>
      </div>
    </>
  );
};

export default CheckOutPage;
