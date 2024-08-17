import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
        <ChakraProvider>
            <Navbar />
            <ItemListContainer greeting= "Bienvenidos a la Fairy Store!"/>
        </ChakraProvider>
    );
}

export default App;
