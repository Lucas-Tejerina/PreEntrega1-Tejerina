import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar";

function App() {
    return (
        <ChakraProvider>
            <Navbar />
        </ChakraProvider>
    );
}

export default App;
