import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Login from "./pages/Login";
import Pessoa from "./pages/Pessoa";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

const Routers = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pessoa" element={<Pessoa />} />
        </Routes>
      <Footer />
    </AuthProvider>
  </BrowserRouter>
  )
}

export default Routers;