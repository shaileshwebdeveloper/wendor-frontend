import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputLeftAddon,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { addUser } from "../utils/user";

export const Signup = () => {
  const initState = {
    name: "",
    email: "",
    password: "",
    mobile: "",
  };

  const [formstate, setFormState] = useState(initState);

  const [users, setUsers] = useState([]);

  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;

   

    setFormState({
      ...formstate,
      [name]: value,
    })
    
  }

  const handleSubmit = (e) => {
     
     formstate.mobile = "+91" + formstate.mobile
    e.preventDefault();
    setUsers([...users, formstate]);
    setFormState(initState); 
    addUser(formstate)
    .then(r => alert(r.data.msg))
    .catch(e =>   console.log(e))

  };


  // console.log("user", users)


  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Register Today!</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool <Text color={"blue.400"}>features</Text> ✌️
          </Text>
        </Stack>
        <form onSubmit={handleSubmit}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="firstname">
              <FormLabel>FIRST NAME</FormLabel>
              <Input
                type="text"
                required
                placeholder="Enter Your First Name"
                name="name"
                value={formstate.name}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="email">
              <FormLabel>EMAIL</FormLabel>
              <Input
                type="email"
                required
                placeholder="Enter Your Email"
                name="email"
                value={formstate.email}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="password">
              <FormLabel>PASSWORD</FormLabel>
              <Input
                type="password"
                required
                placeholder="Enter Your Password"
                name="password"
                value={formstate.password}
                onChange={handleChange}
              />
            </FormControl>

            <FormControl id="mobile">
              <FormLabel>CONTACT</FormLabel>
              <InputGroup>
    <InputLeftAddon children="+91" />
              <Input
                type="number"
                 required
                placeholder="Enter Your Mobile Number"
                name="mobile"
                onChange={handleChange}
                value={formstate.mobile}
              />
    </InputGroup>
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Remember me</Checkbox>
                <Text color={"blue.400"}>Forgot password?</Text>
              </Stack>
              <Input type="submit"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              />
            </Stack>
          </Stack>
        </Box>
        </form>
      </Stack>
    </Flex>
  );
};
