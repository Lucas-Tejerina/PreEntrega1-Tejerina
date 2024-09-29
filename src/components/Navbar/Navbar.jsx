import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    Center,
  } from "@chakra-ui/react";
  import { CartWidget } from "../CartWidget";
  import { Link } from "react-router-dom";
  import { useItemsCollection } from "../../hooks";
  import "./../Navbar/Navbar.css";
  
  export const NavBar = () => {
  
    const { items } = useItemsCollection("categories");
  
    return (
      <>
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <Box>
              <Link to="/" className="text">Fairy Store</Link>
            </Box>
            <Menu>
            <Link to="/category/figuras" className="text">Figuras</Link>
            <Link to="/category/funkos" className="text">Funkos</Link>
            <Link to="/category/llaves" className="text">Llaves</Link>
              <MenuButton as={Link} cursor="pointer" style={{ marginLeft: 30 }} className="text">
                Mangas🔽
              </MenuButton>
              <MenuList height={"auto"} >
                <MenuItem>
                <Link to="/category/mangas S1" >Fairy Tail S1</Link>
                </MenuItem>
                <MenuItem>
                <Link to="/category/mangas S100" >Fairy Tail S100</Link>
                </MenuItem>
              </MenuList>
            </Menu>
            <Flex alignItems={"center"}>
              <Stack direction={"row"} spacing={7}>
                <CartWidget />
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={'./../src/assets/img/icon/iconhappy.png'}
                    />
                  </MenuButton>
                  <MenuList alignItems={"center"}>
                    <br />
                    <Center>
                      <Avatar
                        size={"2xl"}
                        src={'./../src/assets/img/icon/iconhappy.png'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>LuckasWinchester</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  };

