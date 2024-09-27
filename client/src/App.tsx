import { Routes, Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import Admin from "./components/admin/Admin";
import Dashboard from "./pages/admin/Dashboard";
import Products from "./pages/admin/Products";
import Orders from "./pages/admin/Orders";
import Notfound from "./pages/notfound/Notfound";
import Shoppingcomp from "./components/shopping/ShoppingComp";
import Home from "./pages/shopping/Home";
import Listing from "./pages/shopping/Listing";
import Checkout from "./pages/shopping/Checkout";
import Acount from "./pages/shopping/Acount";
import A from "./components/A";
import Checkauth from "./components/checkAuth.tsx/Checkauth";
export default function App() {
  return (
    <div className="app">
      <h1>s</h1>
      <Routes>
        <Route element={<Checkauth></Checkauth>}>
          <Route path="/auth" element={<Auth />}>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
          </Route>

          <Route path="/admin" element={<Admin />}>
            <Route path="orders" element={<Orders />} />
            <Route path="Dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
          </Route>
          <Route path="/shop" element={<Shoppingcomp />}>
            <Route path="home" element={<Home />} />
            <Route path="listing" element={<Listing />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="account" element={<Acount />} />
          </Route>
          <Route path="/notfoud" element={<Notfound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}
Shoppingcomp;
