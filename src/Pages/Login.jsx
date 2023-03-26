import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";

const init = {
  username: "",
  pass: "",
};

export default function Login() {
  const [user, setuser] = useState({ ...init });
  function updateUser(e) {
    let key = e.target.name;
    let value = e.target.value;
    setuser({ ...user, [key]: value });
  }
  console.log(process.env.databaseURL);
  function submit() {
    axios.post(`${process.env.REACT_APP_URL}/auth/login`, user).then((res) => {
      console.log(res.data.token);
      localStorage.setItem("token", res.data.token);
      setuser({ ...init });
      alert("user is logged in");
    });
  }
  console.log(user);
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>username</FormLabel>
              <Input
                name="username"
                value={user.username}
                onChange={updateUser}
                type="text"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                name="pass"
                value={user.pass}
                onChange={updateUser}
                type="password"
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                onClick={submit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Login in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
