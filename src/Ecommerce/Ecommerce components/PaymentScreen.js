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
import { useDispatch, useSelector } from "react-redux";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import EventIcon from "@mui/icons-material/Event";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import UPIPayment from "./UPIPayment";
import CreditCardPayment from "./CreditCardPayment";
import NetBankingPayment from "./NetBankingPayment";
import { PaymentScreenReducerActions } from "../EcommerceReducer/PaymentScreenReducer";

const PaymentScreen = () => {
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
  //
  const currentPaymentMethod = useSelector(
    (state) => state.paymentScreen.currentPaymentMethod
  );

  return (
    <>
      <div className="Outercontainer">
        <div className="header">
          {/* Line of code for "menu" icon */}
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                {/* line of code for "Flipkart Typography" */}
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  Flipkart
                </Typography>
              </Toolbar>
            </AppBar>
          </Box>
        </div>
      </div>
      {/* //outer container */}
      <div
        style={{
          display: "flex",

          padding: "1px 70px",
          height: "100vh",
          backgroundColor: "#d7d7d7",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "80%",
            width: "100%",
            backgroundColor: "#fff",
            borderRadius: "12px",
            display: "flex",
            flexDirection: "row",
            padding: "70px",
            gap: "20px",
          }}
        >
          {/* left conatiner */}
          <div
            style={{
              flex: 6, //take 70%

              backgroundColor: "#fff",
              borderRadius: "12px solid grey",
            }}
          >
            <Accordion
              expanded={currentPaymentMethod === "UPI"}
              onChange={() =>
                dispatch(
                  PaymentScreenReducerActions.updateCurrentPaymentMethod("UPI")
                )
              }
            >
              <AccordionSummary>
                <Box display="flex" flexDirection="column">
                  <Typography
                    sx={{
                      color: "#212121",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    UPI
                  </Typography>
                  <Typography
                    sx={{
                      color: "#666",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "18px",
                    }}
                  >
                    Pay by any UPI app{" "}
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails>
                {/* <Box display="flex" flexDirection="column" gap={2}>
                  <Typography fontWeight={600}>Add new UPI ID</Typography>
                  <TextField size="small" placeholder="Enter your UPI ID" />
                  <Button variant="contained" sx={{ width: "100px" }}>
                    Verify
                  </Button>
                  <Button variant="contained" sx={{ backgroundColor: "grey" }}>
                    Pay ₹579
                  </Button>
                </Box> */}
                <UPIPayment />
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={currentPaymentMethod === "Card"}
              onChange={() =>
                dispatch(
                  PaymentScreenReducerActions.updateCurrentPaymentMethod("Card")
                )
              }
            >
              <AccordionSummary>
                <Box display="flex" flexDirection="column" width="100%">
                  <Box display="flex" alignItems="center" mb={0.5}>
                    <CreditCardIcon sx={{ marginRight: 1 }} />
                    <Typography
                      sx={{
                        color: "#212121",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                      }}
                    >
                      Credit / Debit / ATM Card
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#666",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "18px",
                    }}
                  >
                    Add and secure cards as per RBI Guidelines
                  </Typography>

                  <Typography
                    sx={{
                      color: "#108934",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "18px",
                    }}
                  >
                    Get upto 5% cashback . 2 offers available
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <CreditCardPayment />
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={currentPaymentMethod === "NetBanking"}
              onChange={() =>
                dispatch(
                  PaymentScreenReducerActions.updateCurrentPaymentMethod(
                    "NetBanking"
                  )
                )
              }
            >
              <AccordionSummary sx={{ padding: 2 }}>
                <Box display="flex" alignItems="center">
                  <AccountBalanceIcon sx={{ marginRight: 1 }} />
                  <Typography
                    sx={{
                      color: "#212121",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Net Banking
                  </Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <NetBankingPayment />
              </AccordionDetails>
            </Accordion>
            <Accordion>
              <AccordionSummary sx={{ padding: 2 }}>
                <Box display="flex" alignItems="center">
                  <CardGiftcardIcon sx={{ marginRight: 1 }} />
                  <Typography
                    sx={{
                      color: "#212121",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Have a Flipkart Gift Card ?
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
            <Accordion>
              <AccordionSummary sx={{ padding: 2 }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Box display="flex" alignItems="center">
                    <LocalAtmIcon sx={{ marginRight: 1, color: "#9e9e9e;" }} />
                    <Typography
                      sx={{
                        color: "#9e9e9e;",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                      }}
                    >
                      Cash on delivery
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#9e9e9e;",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Unavailable
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
            <Accordion>
              <AccordionSummary sx={{ padding: 2 }}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Box display="flex" alignItems="center">
                    <EventIcon sx={{ marginRight: 1, color: "#9e9e9e;" }} />
                    <Typography
                      sx={{
                        color: "#9e9e9e;",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "20px",
                      }}
                    >
                      EMI
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                      color: "#9e9e9e;",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  >
                    Unavailable
                  </Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
            <Accordion>
              <AccordionSummary sx={{ padding: 2 }}>
                <Box display="flex" flexDirection="column">
                  <Typography
                    sx={{
                      color: "#9e9e9e;",
                      fontWeight: 600,
                      fontSize: "14px",
                      lineHeight: "20px",
                    }}
                  ></Typography>
                </Box>
              </AccordionSummary>
            </Accordion>
          </div>

          {/* //right container */}
          <div
            style={{
              flex: 3, //take 30%
              backgroundColor: "#fff",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                //     height: "400px",
                //     width: "480px",
                backgroundColor: "#f0f5ff",
                padding: "9px",
                //     boxSizing: "border-box",
              }}
            >
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
                <Typography variant="h6" sx={{ color: "#2a55e5" }}>
                  Total Amount
                </Typography>
                <Typography variant="h6" sx={{ color: "#2a55e5" }}>
                  ₹{totalPrice}
                </Typography>
              </Box>
            </div>
            <Card sx={{ marginTop: "20px", backgroundColor: "#e7f8ec" }}>
              <CardContent sx={{ padding: "3px" }}>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    color: "#0e772d ",
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  5% Cashback
                </Typography>{" "}
                <Typography
                  variant="body2"
                  sx={{ color: "#0e772d ", fontSize: "14px" }}
                >
                  claim now with payment offers
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
export default PaymentScreen;
