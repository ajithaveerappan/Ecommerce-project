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
import UPIPaymentReducer, {
  UPIPaymentReducerActions,
} from "../EcommerceReducer/UPIPaymentReducer";

const UPIPayment = () => {
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

  // UPI ID validation

  const upi = useSelector((state) => state.upipayment.upi);
  const errorMessage = useSelector((state) => state.upipayment.errorMessage);

  const upivalidate = (upivalue) => {
    const upiRegexvalidate = /^[\w.\-_]{2,256}@[a-zA-Z]{2,64}$/;
    return upiRegexvalidate.test(upivalue);
  };
  // Clear the error while typing
  if (errorMessage) {
    dispatch(UPIPaymentReducerActions.updateErrorMessage(""));
  }

  const handleverify = (e) => {
    if (!upivalidate(upi)) {
      dispatch(UPIPaymentReducerActions.updateErrorMessage("Invalid UPI"));
    } else {
      dispatch(UPIPaymentReducerActions.updateUpi(""));
      alert("UPI Verified Successfully ✅");
    }
  };
  return (
    <>
      <Box display="flex" flexDirection="column" gap={2}>
        <Typography fontWeight={600}>Add new UPI ID</Typography>
        <TextField
          size="small"
          placeholder="Enter your UPI ID"
          value={upi}
          onChange={(e) =>
            dispatch(UPIPaymentReducerActions.updateUpi(e.target.value))
          }
        />
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        <Button
          variant="contained"
          sx={{ width: "100px" }}
          onClick={handleverify}
        >
          Verify
        </Button>
        <Button variant="contained" sx={{ backgroundColor: "grey" }}>
          {/* Using the calculated total price for the button text */}
          Pay ₹{totalPrice}
        </Button>
      </Box>
    </>
  );
};
export default UPIPayment;
