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
  email: "",
  pass: "",
  age: "",
  username: "",
};

export default function Register() {
  const [user, setuser] = useState(init);

  function updateUser(e) {
    let key = e.target.name;
    let value = key == "age" ? +e.target.value : e.target.value;
    setuser({ ...user, [key]: value });
  }

  function submit() {
    axios.post(`${process.env.REACT_APP_URL}/auth/register`, user).then(() => {
      setuser({ ...init });
      alert("user is signed in");
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
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                name="email"
                value={user.email}
                onChange={updateUser}
              />
            </FormControl>
            <FormControl id="username">
              <FormLabel>username</FormLabel>
              <Input
                type="text"
                name="username"
                value={user.username}
                onChange={updateUser}
              />
            </FormControl>
            <FormControl id="age">
              <FormLabel>age</FormLabel>
              <Input
                type="number"
                name="age"
                value={user.age ? user.age : ""}
                onChange={updateUser}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                name="pass"
                value={user.pass}
                onChange={updateUser}
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
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
