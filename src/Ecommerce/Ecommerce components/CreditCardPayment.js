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
import { CreditCardValidationReducerActions } from "../EcommerceReducer/CreditCardValidationReducer";

const CreditCardPayment = () => {
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
  // card number validation
  const cardNumber = useSelector((state) => state.creditcard.cardNumber);
  const errorMessage = useSelector((state) => state.creditcard.errorMessage);

  const validateCardNumber = (number) => {
    const sanitized = number.replace(/\s+/g, "");
    if (!/^\d{13,19}$/.test(sanitized)) return false;
    let sum = 0;
    let shouldDouble = false;
    for (let i = sanitized.length - 1; i >= 0; i--) {
      let digit = parseInt(sanitized.charAt(i), 10);
      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
      shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
  };
  // Clear the error while typing
  if (errorMessage) {
    dispatch(CreditCardValidationReducerActions.updateErrorMessage(""));
  }
  const handleValidate = () => {
    if (validateCardNumber(cardNumber)) {
      dispatch(CreditCardValidationReducerActions.updateCardNumber(""));
      alert("✅ Valid Credit Card Number");
    } else {
      dispatch(
        CreditCardValidationReducerActions.updateErrorMessage(
          "Invalid credit card number"
        )
      );
    }
  };

  return (
    <>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography sx={{ fontSize: "15px" }}>Card number</Typography>
        <TextField
          size="small"
          placeholder="xxxx xxxx xxxx xxxx"
          value={cardNumber}
          onChange={(e) =>
            dispatch(
              CreditCardValidationReducerActions.updateCardNumber(
                e.target.value
              )
            )
          }
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "4px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Typography sx={{ fontSize: "15px" }}>Valid Thru</Typography>
            <TextField placeholder="MM/YY" size="small" />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Typography sx={{ fontSize: "15px" }}>CVV</Typography>
            <TextField size="small" placeholder="CVV" />
          </Box>
        </Box>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Button
          variant="contained"
          sx={{ backgroundColor: "#ffc200", color: "#212121" }}
          onClick={handleValidate}
        >
          {/* Using the calculated total price for the button text */}
          Pay ₹{totalPrice}
        </Button>
      </Box>
    </>
  );
};
export default CreditCardPayment;
