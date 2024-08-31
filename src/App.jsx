import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { ProductsData } from "./data/productData";


function App() {
    return (
        <ChakraProvider>
            <Navbar />
            <ItemListContainer greeting= "Bienvenidos a la Fairy Store!" products= {ProductsData} />
        </ChakraProvider>
    );
}

export default App;
