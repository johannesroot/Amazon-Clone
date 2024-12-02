import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
// import { FakeStoreAPI_BaseURL } from "../../API/EndPoints";
import styles from "./Results.module.css";
import ProductDetail from "../ProductDetail/ProductDetail";
import Layout from "../../Components/Layout/Layout";
// import Loader from "../../components/Loader/Loder";
import ProductCard from "../../Components/Product/ProductCard";
import { FakeStoreAPI_BaseURL as productUrl } from "../../API/EndPoints";
function Results() {
  const { categoryName } = useParams();
  const [results, setResults] = useState([]);
//   const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    // setIsloading(true);
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res.data);
        setResults(res.data);
        // setIsloading(false);
      })
      .catch((err) => {
        console.log(err);
        // setIsloading(false);
      });
  }, [categoryName]);
  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {/* {isLoading ? (
          <Loader />
        ) : ( */}
          <div className={styles.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        {/* )}  */}
      </section>
       
     </Layout>
  );
}

export default Results;