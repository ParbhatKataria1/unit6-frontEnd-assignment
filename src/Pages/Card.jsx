import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";

const CardItem = ({
  title,
  description,
  _id,
  userId,
  updateItem,
  deleteItem,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <GridItem w="100%" h="200px">
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
      >
        <Stack>
          <CardBody textAlign={"left"}>
            <Heading size="md">{title}</Heading>

            <Text py="2">{description}</Text>
          </CardBody>

          <CardFooter>
            <Button onClick={onOpen} variant="solid" colorScheme="blue">
              Update
            </Button>
            <PopUp
              title={title}
              description={description}
              _id={_id}
              updateItem={updateItem}
              isOpen={isOpen}
              onClose={onClose}
              userId={userId}
            />
            <Button
              onClick={() => {
                deleteItem(_id);
              }}
              ml="30px"
              variant="solid"
              colorScheme="blue"
            >
              Delete
            </Button>
          </CardFooter>
        </Stack>
      </Card>
    </GridItem>
  );
};

export default CardItem;

function PopUp({
  isOpen,
  onClose,
  title,
  description,
  _id,
  updateItem,
  userId,
}) {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const init = {
    title,
    description,
    userId,
  };
  const [user, setuser] = useState({ ...init });
  function updateUser(e) {
    let key = e.target.name;
    let value = e.target.value;
    setuser({ ...user, [key]: value });
  }

  function submit() {
    updateItem(_id, user);
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={4}>
            <FormControl id="username">
              <FormLabel>title</FormLabel>
              <Input
                name="title"
                value={user.title}
                onChange={updateUser}
                type="text"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Description</FormLabel>
              <Input
                name="description"
                value={user.description}
                onChange={updateUser}
                type="text"
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
                Update
              </Button>
            </Stack>
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
