import "./App.css";
import MobileNumberValidation from "./Ecommerce/Ecommerce components/MobileNumberValidation";

import UserLogin from "./Ecommerce/Ecommerce components/UserLogin";
import OTPValidation from "./Ecommerce/Ecommerce components/OTPValidation";
import { useSelector } from "react-redux";
function App() {
  // const App = () => {
  //   const currentScreen = useSelector(
  //     (state) => state.mobileNumberReducer.currentScreen
  //   );
  // };
  // if (currentScreen === "home") return <MobileNumberValidation />;
  // if (currentScreen === "otp") return <OTPValidation />;
  return (
    <div>
      <UserLogin></UserLogin>
    </div>
  );
}

export default App;
