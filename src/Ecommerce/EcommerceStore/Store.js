import addToCartReducer from "../EcommerceReducer/AddtoCartItemsReducer";
import MobileNumberReducer from "../EcommerceReducer/MobileNumberReducer";
import MoreoptionReducer from "../EcommerceReducer/MoreoptionReducer";
import { configureStore } from "@reduxjs/toolkit";
import OrderSummaryReducer from "../EcommerceReducer/OrderSummaryReducer";
import PaymentScreenReducer from "../EcommerceReducer/PaymentScreenReducer";
import UPIPaymentReducer from "../EcommerceReducer/UPIPaymentReducer";
import CreditCardValidationReducer from "../EcommerceReducer/CreditCardValidationReducer";

const store = configureStore({
  reducer: {
    moreOption: MoreoptionReducer.reducer,
    mobileNumberReducer: MobileNumberReducer.reducer,
    addToCartReducer: addToCartReducer.reducer,
    orderSummaryReducer: OrderSummaryReducer.reducer,
    paymentScreen: PaymentScreenReducer.reducer,
    upipayment: UPIPaymentReducer.reducer,
    creditcard: CreditCardValidationReducer.reducer,
  },
});

export default store;
