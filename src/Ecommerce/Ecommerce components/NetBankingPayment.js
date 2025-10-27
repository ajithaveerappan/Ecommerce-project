import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const NetBankingPayment = () => {
  const dispatch = useDispatch();
  const addToCartItems = useSelector(
    (state) => state.addToCartReducer.addToCartItems
  );

  const actualPriceValue = addToCartItems.reduce(
    (acc, item) => acc + item.actualPrice,
    0
  );

  const discountValue = addToCartItems.reduce(
    (acc, item) => acc + (item.actualPrice - item.discountPrice),
    0
  );

  const couponValue = 70;
  const platformFee = 7;
  const totalPrice =
    actualPriceValue - discountValue + platformFee - couponValue;
  const isCartEmpty = addToCartItems.length === 0;

  const topBanks = [
    { id: "hdfc", name: "HDFC Bank" },
    { id: "icici", name: "ICICI Bank" },
    { id: "sbi", name: "SBI Bank" },
  ];

  const [selectedBank, setSelectedBank] = useState(topBanks[0].id);

  const handleChange = (event) => setSelectedBank(event.target.value);

  return (
    <Box display="flex" flexDirection="column" gap={3}>
      <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
        Select Your Bank
      </Typography>

      <Typography sx={{ fontSize: "15px" }}>Top Banks</Typography>

      <RadioGroup
        name="bank-radio-group"
        value={selectedBank}
        onChange={handleChange}
      >
        {topBanks.map((bank) => (
          <FormControlLabel
            key={bank.id}
            value={bank.id}
            control={<Radio size="small" />}
            label={bank.name}
          />
        ))}
      </RadioGroup>

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#ffc200",
          color: "#212121",
          fontWeight: "bold",
          "&:hover": { backgroundColor: "#ffca28" },
        }}
        disabled={isCartEmpty}
      >
        Pay ₹{totalPrice}
      </Button>
    </Box>
  );
};

// ✅ Export must be OUTSIDE all functions
export default NetBankingPayment;
