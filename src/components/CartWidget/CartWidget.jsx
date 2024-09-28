import { Flex, Text } from "@chakra-ui/react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export const CartWidget = () => {
    const {cartState} = useContext(CartContext);
    const qtyTotalItems = cartState.reduce ((acc, item) => acc + item.qtyItem, 0)
    return (
        <Flex color={"lightblue"}justifyContent={"space-between"}>
        <RiShoppingCart2Line  size={"35px"}/>
        <Link to="/checkout"><Text fontSize={"1.5rem"}>{qtyTotalItems}</Text></Link>
        </Flex>
    )
};

