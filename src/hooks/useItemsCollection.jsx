import React from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const useItemsCollection = (categoryName) => {
  const [items, setItems] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const productsCollection = collection(db, categoryName);
    getDocs(productsCollection)
    .then((snapshot) => {
      setItems(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))
    })
    .catch((error) => setError(true))
    .finally(() => setLoading(false));
  }, []);

  return { items, loading };
};
