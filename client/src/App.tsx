import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AvoidAdmin from "./components/checkAuth/AvoidAdmin";
const Auth = lazy(() => import("./components/auth/Auth"));
const Admin = lazy(() => import("./components/admin/Admin"));
const Signup = lazy(() => import("./pages/auth/Signup"));
import Login from "./pages/auth/Login";
import Loading from "./components/loading/Loadin";
//const Adminlazy(()=>import() "./components/admin/Admin";
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Products = lazy(() => import("./pages/admin/Products"));
const Orders = lazy(() => import("./pages/admin/Orders"));
const Nopage = lazy(() => import("./components/Nopage/Nopage"));
const Shoppingcomp = lazy(() => import("./components/shopping/ShoppingComp"));
const Product = lazy(() => import("./pages/shopping/Product"));
const Listing = lazy(() => import("./pages/shopping/Listing"));
const AdressCheckout = lazy(() => import("./pages/shopping/AdressCheckout"));
const Acount = lazy(() => import("./pages/shopping/Acount"));
const Procheck = lazy(() => import("./pages/shopping/Procheck"));
import AdminCheck from "./components/checkAuth/AdminCheck";
const Finalpay = lazy(() => import("./pages/shopping/Finalpay"));
import LogAgain from "./components/checkAuth/LogAgain";
import Checkauth from "./components/checkAuth/Checkauth";
import CheckoutAuth from "./components/checkAuth/CheckoutAuth";
export default function App() {
  return (
    <div className="app">
      <Suspense fallback={<Loading></Loading>}>
        <Routes>
          <Route path="/" element={<Checkauth></Checkauth>}></Route>
          <Route path="auth" element={<Auth />}>
            <Route path="" element={<LogAgain></LogAgain>}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route path="" element={<AdminCheck></AdminCheck>}>
              <Route path="orders" element={<Orders />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
            </Route>
          </Route>
          <Route path="shop" element={<Shoppingcomp />}>
            <Route path="" element={<AvoidAdmin></AvoidAdmin>}>
              <Route path="ProductId/:id" element={<Product />} />
              <Route path="listing" element={<Listing />} />
              <Route path="address" element={<AdressCheckout />} />
              <Route path="checkout" element={<Procheck />} />

              <Route path="" element={<CheckoutAuth></CheckoutAuth>}>
                <Route path="pay" element={<Finalpay />} />
                <Route path="account" element={<Acount />} />
              </Route>
            </Route>
          </Route>
          <Route path="*" element={<Nopage />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
