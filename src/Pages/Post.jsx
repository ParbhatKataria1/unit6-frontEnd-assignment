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
  title: "",
  description: "",
};

export default function Post() {
  const [item, setitem] = useState({ ...init });
  function update(e) {
    console.log(item);
    setitem({ ...item, [e.target.name]: e.target.value });
  }

  function submit() {
    axios
      .post(`${process.env.REACT_APP_URL}/notes`, item, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then(() => setitem({ ...init }));
  }
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Post data here</Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="title">
              <FormLabel>Title</FormLabel>
              <Input
                type="text"
                onChange={update}
                name="title"
                value={item.title}
              />
            </FormControl>
            <FormControl id="description">
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                onChange={update}
                name="description"
                value={item.description}
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
                Post Data
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
