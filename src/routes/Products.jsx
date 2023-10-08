import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { deleteProducts, getProducts } from "../utils/products";
import { Box, Button, Flex, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { Edit } from "./Edit";
import { AuthContext } from "../context/AuthContext";
import { AddProduct } from "./AddProduct";

export const Products = () => {
  const { state } = useContext(AuthContext);

  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts().then((r) => setData(r.data));
  }, [data]);

  const getData = () => {
    axios
      .get("https://wendor-dada.onrender.com/products")
      .then((r) => setData(r.data));
  };

  const handleDelete = (id) => {
    console.log("id", id);

    deleteProducts(id).then((r) => getData());
  };

  return (
    <>
      <Box>
        <AddProduct />
      </Box>
      <SimpleGrid columns={3} spacing={10} mt="20px" width={"80%"} m="auto">
        {data?.map((item) => (
          <Box
            key={item._id}
            style={{
              // border: "1px solid black",
              borderRadius: "10%",
              padding: "10%",
              width: "400px",
              margin: "auto",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              textAlign: "left",
            }}
          >
            <Img
              src={item.image}
              alt=""
              style={{ width: "400px", height: "200px" }}
            />
            <Text as="b" fontSize="md">
              {item.title}
            </Text>
            <br />
            <Text as="b" fontSize="md">
              {item.price} <span style={{ color: "teal" }}> 25% off</span>
            </Text>
            <br />
            <Text as="b" fontSize="sm" color={"purple"} align={"left"}>
              Big Saving Deal
            </Text>
            <br />
            <Text
              fontSize="sm"
              padding={"2px"}
              color="#bba5e9"
              bgColor={"#e9deff"}
              w="170px"
              p="1%"
            >
              Top Discount of the Sale
            </Text>
            <br />
            {state.isAuth ? (
              <Flex justifyContent={"space-around"}>
                <Button
                  onClick={() => handleDelete(item._id)}
                  colorScheme="red"
                  variant="outline"
                  size="lg"
                >
                  REMOVE
                </Button>
                <Edit {...item} setData={setData} />
              </Flex>
            ) : null}
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};
