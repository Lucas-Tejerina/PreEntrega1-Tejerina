import {
    Box,
    Card,
    Stack,
    Heading,
    CardBody,
    Divider,
    CardFooter,
    ButtonGroup,
    Image,
    Text,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import "./../ItemListContainer/ItemListContainer.css";


  export const ItemListContainer = ({ products }) => {
    return (
      <Box className="container__box">
        {products.map((product) => (
          <Card key={product.id} maxW="sm" margin={"1rem"}>
            <CardBody>
              <Image
                src={product.image}
                alt={product.name}
                borderRadius="lg"
                objectFit={"contain"}
                maxHeight={400}
                maxWidth={300}
                className="card__img"
              />
              <Stack mt="6" spacing="3">
                <Heading fontSize={20}>{product.title}</Heading>
                <Text color="blue.600" fontSize="2xl" >
                  ${product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Link to={`/item/${product.id}`}>
                  {" "}
                  Ir a detalle del producto{" "}
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Box>
    );
  };