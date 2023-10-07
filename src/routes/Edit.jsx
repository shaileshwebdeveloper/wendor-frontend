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
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getProducts, updateProducts } from "../utils/products";

export const Edit = ({ _id, title, image, price }) => {
  
  const [data, setData] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  const [payload, setPayload] = useState({
    id: _id,
    title: title,
    image: image,
    price: price,
  });

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
    console.log("EDIT payload", payload)
    updateProducts(_id, payload).then((r) => getData());
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal" variant="outline">
        Edit
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
                placeholder="Update Title"
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
                placeholder="Update Image Url"
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
                placeholder="Update Price"
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
