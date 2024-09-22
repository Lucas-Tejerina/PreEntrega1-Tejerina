import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
// import { getAllProducts } from "../services/product.service";

export const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const productsCollection = collection(db, 'products');
    getDocs(productsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    }).catch((error) => setError(true)).finally(() => setLoading(false));

    // getAllProducts()
    //   .then((response) => {
    //     setProducts(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   })
    //   .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};
