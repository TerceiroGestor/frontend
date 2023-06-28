import ThirdSectorProvider from "./context/ThirdSectorProvider";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { GlobalStyle } from "./styles/global";
import Register from "./pages/Register/Register";
import Home from "./pages/Home";
import SingIn from "./pages/SingIn";
import RegisterUser from "./pages/RegisterUser";

function App() {
  return (
    <ThirdSectorProvider>
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/register/adress" element={<Register />} />
          <Route path="/register/diversity" element={<Register />} />
          <Route path="/register/contact" element={<Register />} />
          <Route path="/register/comments" element={<Register />} />
          <Route path="/login" element={<SingIn />} />
        </Routes>
      </>
    </ThirdSectorProvider>
  );
}

export default App;
