import React from "react";
import Category from "../../Components/Category/Category";
import CarouselEffect from "../../Components/Carousel/Carousel";
import Product from "../../Components/Product/Product";
import Layout from "../../Components/Layout/Layout";

function Landing() {
  return (
    <Layout>
      <CarouselEffect />
      <Category />
      <Product />
    </Layout>
  );
}

export default Landing;