import "./App.css";
import MobileNumberValidation from "./Ecommerce/Ecommerce components/MobileNumberValidation";

import UserLogin from "./Ecommerce/Ecommerce components/UserLogin";
import OTPValidation from "./Ecommerce/Ecommerce components/OTPValidation";
import { useSelector } from "react-redux";
import HomePage from "./Ecommerce/Ecommerce components/HomePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckOutPage from "./Ecommerce/Ecommerce components/CheckoutPage";
import OrderSummary from "./Ecommerce/Ecommerce components/OrderSummary";
import PaymentScreen from "./Ecommerce/Ecommerce components/PaymentScreen";
function App() {
  // const App = () => {
  //   const currentScreen = useSelector(
  //     (state) => state.mobileNumberReducer.currentScreen
  //   );
  // };
  // if (currentScreen === "login) return <MobileNumberValidation />;
  // if (currentScreen === "otp") return <OTPValidation />;
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<UserLogin />} />
    //     <Route path="/home" element={<HomePage />} />

    //     <Route path="/cart" element={<CheckOutPage />} />

    //     <Route path="/orderSummary" element={<OrderSummary />} />
    //   </Routes>
    // </Router>
    <div>
      <PaymentScreen></PaymentScreen>
    </div>
  );
}

export default App;
