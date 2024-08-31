import { Box } from "@chakra-ui/react";
import "./../ItemListContainer/ItemListContainer.css";

const ItemListContainer = ({greeting, products}) => {
    console.log (products);

    return (
        <Box className= "itemlist"> {
            products.map((product) => {
                return (
                    <Box className="card">
                    <img src={product.image} alt={product.name}  className="card__img"/>
                    <Box className="card__container__info">
                    <h2 className="card__title">{product.name}</h2>
                    <p className="card__text">{product.description}</p>
                    <p className="card__price">${product.price}</p>
                    <button className="card__button">Comprar</button>
                    </Box>
                    </Box>
                )
            })
        } </Box>
    )
}

export default ItemListContainer;