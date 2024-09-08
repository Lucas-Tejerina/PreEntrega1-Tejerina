import React from "react";
import { getProductsByCategory } from "../services/product.service";

export const useProductsByCategory = (id) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getProductsByCategory(id)
      .then((response) => {
        console.log(response);
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return { products };
};