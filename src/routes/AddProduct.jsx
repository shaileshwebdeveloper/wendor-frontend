import React, { useRef, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  Box,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { addProducts } from "../utils/products";

export const AddProduct = () => {
  const initState = {
    title: "",
    image: "",
    price: "",
  };

  const [data, setData] = useState([]);

  const toast = useToast();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [payload, setPayload] = useState(initState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };

  const getData = () => {
    return axios
      .get("https://wendor-dada.onrender.com/products")
      .then((r) => setData(r.data));
  };

  const handleSubmit = () => {
    console.log("payload", payload);

    if (payload.image === "" && payload.price === "") {
      toast({
        title: "Error",
        description: "Please fill all field",
        status: "success",
        duration: 1000,
        isClosable: true,
        colorScheme: "red",
      });
    } else {
      if (payload.image === "") {
        payload.image =
          "https://cdn.pixabay.com/photo/2017/09/10/18/25/question-2736480_1280.jpg";
      }

      setPayload(initState);
      //   console.log(products, "products")

      addProducts(payload).then((r) => getData());

      toast({
        title: "Product Added",
        description: "New product added",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    }
  };

  //   console.log("data add products", products)

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" variant="outline" mb="20px">
        ADD NEW PRODUCT
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box>
              <Input
                value={payload.title}
                placeholder="Please Add the Title"
                name="title"
                onChange={handleChange}
                mb={"1rem"}
                border="1px solid teal"
                required
              />
            </Box>

            <Box>
              <Input
                type="text"
                value={payload.image}
                name="image"
                onChange={handleChange}
                placeholder="Please Add Image Url"
                mb={"1rem"}
                border="1px solid teal"
              />
            </Box>

            <Box>
              <Input
                type="Number"
                required
                value={payload.price}
                name="price"
                onChange={handleChange}
                placeholder="Please Add Price"
                mb={"1rem"}
                border="1px solid teal"
              />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                handleSubmit();
                onClose();
              }}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
