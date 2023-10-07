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
} from "@chakra-ui/react";
import axios from "axios";
import { addProducts } from "../utils/products";

export const AddProduct = () => {

    const initState = {
        title: "",
        image : "",
        price : "",
      };

      const [data, setData] = useState([]);


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

    console.log("payload", payload)

    if(payload.image ===  ""){
       payload.image = "https://cdn.pixabay.com/photo/2017/09/10/18/25/question-2736480_1280.jpg"
    }


    setPayload(initState);
    //   console.log(products, "products")

    addProducts(payload).then((r) => getData());
  };

//   console.log("data add products", products)

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" variant="outline">
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
                name="title"
                onChange={handleChange}
                placeholder="Add Title"
                mb={"1rem"}
                border="1px solid teal"
              />
            </Box>

            <Box>
              <Input
                type="text"
                value={payload.image}
                name="image"
                onChange={handleChange}
                placeholder="Add Image Url"
                mb={"1rem"}
                border="1px solid teal"
              />
            </Box>

            <Box>
              <Input
                type="Number"
                value={payload.price}
                name="price"
                onChange={handleChange}
                placeholder="Add Price"
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
