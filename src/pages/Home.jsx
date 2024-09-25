import React from "react";
import { ItemListContainer } from "../components";
import { useItemsCollection } from "../hooks/useItemsCollection";

export const Home = () => {
    const { items, loading } = useItemsCollection("products");

    return <ItemListContainer products={items} />;
};
