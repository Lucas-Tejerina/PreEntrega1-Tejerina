import React from "react";
import {collection, getDocs, query, where} from "firebase/firestore";
import { db } from "../firebase/config";
// import { getProductsByCategory } from "../services/product.service";

export const useProductsByCategory = (id) => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {

    const customQuery = query(
      collection(db, "products"),
      where("category", "==", id),
    );

    getDocs(customQuery).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})));
    })
    .catch(() => setError(true))
    .finally(() => setLoading(false));

    // getProductsByCategory(id)
    //   .then((response) => {
    //     setProducts(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }, [id]);

  return { products, loading };
};