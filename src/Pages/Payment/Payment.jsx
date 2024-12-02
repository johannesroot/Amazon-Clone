import React, { useContext, useState } from "react";
import Layout from "../../Components/Layout/Layout";
// import ProductCard from "../../Components/Product/ProductCard";
// import styles from "./Payment.module.css";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
// import { ClipLoader } from "react-spinners";
// import { useNavigate } from "react-router-dom";
// import {Type} from "../../Utility/action.type";
// // for stripe checkout
// import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

// import { axiosInstance } from "../../API/axios";
// import { db } from "../../Utility/firebase";

function Payment() {
//   const [{ user, basket}, dispatch ] = useContext(DataContext);

//   const [cardError, setCardError] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const navigate = useNavigate();

//   //stripe hooks for checkout / payment confirmation
//   const stripe = useStripe();
//   const elements = useElements();

//   const totalItem = basket?.reduce((amount, item) => {
//     return item.amount + amount;
//   }, 0);

//   const total = basket.reduce((allocator, item) => {
//     return item.price * item.amount + allocator;
//   }, 0);

//   // controls card inputs while typing
//   const handleChange = (e) => {
//     console.log(e?.error?.message);
//     e?.error?.message ? setCardError(e?.error?.message) : setCardError("");
//   };

//   // payment handling function
//   const handlePayment = async (e) => {
//     e.preventDefault();

//     try {
//       setProcessing(true);
//       // 1. backend || functions ---> contact to the client secret
//       const response = await axiosInstance({
//         method: "POST",
//         url: `/payment/create?total=${total * 100}`, // coz stripe is expecting amounts deviding by 100;  when we send to stripe we *100 when we recive from it we /100
//       });

//       console.log(response.data);
//       const clientSecret = response.data?.clientPaymentSecret;
//       // 2. client side (react side confirmation)
//       const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           // get card data from CardElement which is used by users
//           card: elements.getElement(CardElement),
//         },
//       });

//       console.log(paymentIntent);

//       // 3. after the confirmation --> order > firestore database save (make sure firstore db is enabeled in firebase project), clear basket
//       await db
//         .collection("users")
//         .doc(user.uid)
//         .collection("orders")
//         .doc(paymentIntent.id)
//         .set({
//           basket: basket,
//           amount: paymentIntent.amount,
//           created: paymentIntent.created,
//         });
//       // empty the basket
//       dispatch({ type: Type.EMPTY_BASKET });

//       setProcessing(false);
//       navigate("/orders", { state: { msg: "you have placed new Order" } });
//     } catch (error) {
//       // console.log(error);
//       setProcessing(false);
//     }
//   };

  return (
    <Layout>
    <h1>payment</h1>
    </Layout>
  );
}

export default Payment;