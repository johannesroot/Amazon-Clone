import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../Landing/Landing";
import Auth from "../../Pages/Auth/Signup";
import Payment from "../../Pages/Payment/Payment";
import Cart from "../Cart/Cart";
import Orders from "../Oreders/Oreders";
import Results from "../Results/Results";
import ProductDetail from "../ProductDetail/ProductDetail";
import Product from "../../Components/Product/Product";

// //for stripe
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

import PageNotFound from "../PageNotFound/PageNotFound";
// import ProtectedRoute from "../";

// //provide public key and load it to stirpe
// const stripePromise = loadStripe(
//   import.meta.env.VITE_STRIPE_PUBLIC_KEY
// );

function Routering() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />

        <Route
          path="/payments"
          element={
            // wrap payment component by Element from stripe and provide stripe prop with a value of stripePromise and hold that in protectedRoute
            // <ProtectedRoute
            //   msg={
            //     "Please sign in to complete your payment. (You'll be redirected to the checkout page)"
            //   }
            //   redirect={"/payments"}
            // >
            //   <Elements stripe={stripePromise}>
                <Payment />
            //   </Elements>
            // </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            // <ProtectedRoute
            //   msg={"Please sign in to access your orders"}
            //   redirect={"/orders"}
            // >
              <Orders />
            // </ProtectedRoute>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/products" element={<Product />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default Routering;