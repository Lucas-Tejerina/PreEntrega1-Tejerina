import { Box } from "@chakra-ui/react";

const ItemListContainer = ({greeting}) => {
    return (
        <Box textAlign={"center"} fontSize={"40px"} fontFamily={"cursive"} > {greeting} </Box>
    )
}

export default ItemListContainer;