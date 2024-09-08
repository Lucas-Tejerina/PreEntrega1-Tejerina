import { Flex, Text } from "@chakra-ui/react";
import { RiShoppingCart2Line } from "react-icons/ri";

export const CartWidget = () => {
    return (
        <Flex color={"lightblue"}justifyContent={"space-between"}>
        <RiShoppingCart2Line  size={"35px"}/>
        <Text fontSize={"20px"} >4</Text>
        </Flex>
    )
};

