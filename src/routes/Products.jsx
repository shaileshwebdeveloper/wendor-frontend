import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { deleteProducts, getProducts } from "../utils/products";
import { Box, Button, Img, SimpleGrid } from "@chakra-ui/react";
import { Edit } from "./Edit";
import { AuthContext } from "../context/AuthContext";
import { AddProduct } from "./AddProduct";

export const Products = () => {
  const [products, setProducts] = useState([]);

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
      <SimpleGrid columns={4} spacing={10} mt="20px">
        {data?.map((item) => (
          <Box
            key={item._id}
            style={{
              border: "1px solid black",
              width: "200px",
              margin: "auto",
            }}
          >
            <h1>{item.title}</h1>
            <Img src={item.image} alt="" style={{ width: "200px" }} />
            <p>{item.price}</p>
            {/* {state.isAuth ? ( */}
              <>
                <Button
                  onClick={() => handleDelete(item._id)}
                  colorScheme="teal"
                  size="md"
                >
                  Remove
                </Button>
                <Edit {...item} setData={setData} />
              </>
            {/* ) : null} */}
          </Box>
        ))}
      </SimpleGrid>
    </>
  );
};
