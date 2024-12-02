import React, { useContext, useState, useEffect } from "react";
import Layout from "../../Components/Layout/Layout"
import classes from "./orders.module.css";
// import { db } from "../../Utility/firebase";
// import { DataContext } from "../../components/DataProvider/DataProvider";
// // import ProductCard from "../../components/Product/ProductCard";
// import { BiLoader } from "react-icons/bi";
// import moment  from 'moment';


function Orders() {
  // const [{ user }, dispatch] = useContext(DataContext);
  // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   if (user) {
  //     db.collection("users")
  //     .doc(user.uid)
  //     .collection("orders")
  //     .orderBy("created", "desc")
  //     .onSnapshot((snapshot) => {
  //       setOrders(
  //         snapshot.docs.map((doc) => ({
  //           id: doc.id,            // Fetch the document ID correctly
  //           created: doc.data().created,  // Fetch the 'created' field from the document's data
  //           amount: doc.data().amount,    // Fetch the 'amount' field (as you are logging)
  //           data: doc.data(),      // Optional: include the whole document's data
  //         }))
  //       );
  //     });
  //   } else {
  //     setOrders([]);
  //   }
  // }, []);

  return (
    <Layout>
      <h1>orders</h1>
     </Layout>
  );
}

export default Orders;