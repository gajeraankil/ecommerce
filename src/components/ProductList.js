import React from "react";
import { useSelector } from "react-redux";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const filter = useSelector((state) => state.filter);
  const { filter_products, grid_view } = filter;

  if (grid_view === true) {
    return <GridView products={filter_products} />;
  }

  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
};

export default ProductList;
