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
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";

import { sendOtp, verifyOtp } from "../utils/user";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const initState = {
    mobile: "",
    enteredOTP: "",
  };

  const [formstate, setFormState] = useState(initState);

  const [users, setUsers] = useState([]);

  const auth = useContext(AuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name: key, value } = e.target;

    setFormState({
      ...formstate,
      [key]: value,
    });
  };


  const handleSendOtp = () => {
    const payload = { mobile: formstate.mobile };

    sendOtp(payload)
      .then((r) => alert(r.data.msg))
      .catch((e) => console.log(e));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    formstate.mobile = "+91" + formstate.mobile;

    setUsers([...users, formstate]);
    setFormState(initState);

    console.log("formstate", formstate);

    verifyOtp(formstate)
      .then((r) => console.log(r.data))
      .catch((error) => {
        alert("Something went wrong");
        console.log("error", error);
      });
  };



  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Sign in to your account</Heading>
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
              <FormControl id="mobile">
                <FormLabel>CONTACT</FormLabel>
                <Input
                  type="number"
                  required
                  placeholder="Enter Your Mobile Number"
                  onChange={handleChange}
                  name="mobile"
                  value={formstate.mobile}
                />
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSendOtp}
                >
                  SEND OTP
                </Button>
              </FormControl>

              <FormControl id="password">
                <FormLabel>OTP</FormLabel>
                <Input
                  type="number"
                  required
                  placeholder="Verify Your Otp"
                  onChange={handleChange}
                  name="enteredOTP"
                  value={formstate.enteredOTP}
                />
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
                <Input
                  type="submit"
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
