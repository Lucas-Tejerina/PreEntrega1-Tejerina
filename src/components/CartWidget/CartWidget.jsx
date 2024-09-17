import { Flex, Text } from "@chakra-ui/react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
    const {cartState} = useContext(CartContext);
    const qtyTotalItems = cartState.reduce ((acc, item) => acc + item.qtyItem, 0)
    return (
        <Flex color={"lightblue"}justifyContent={"space-between"}>
        <RiShoppingCart2Line  size={"35px"}/>
        <Text fontSize={"20px"} >{qtyTotalItems}</Text>
        </Flex>
    )
};

