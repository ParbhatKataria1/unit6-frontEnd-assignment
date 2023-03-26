import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem from "./Card";
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

const Notes = () => {
  const [notes, setnotes] = useState([]);
  console.log(typeof localStorage.getItem("token"));

  function getData() {
    axios
      .get(`${process.env.REACT_APP_URL}/notes`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setnotes(res.data);
      });
  }
  useEffect(() => {
    getData();
  }, []);
  console.log(notes);

  function updateItem(id, obj) {
    console.log(id);
    axios
      .patch(`${process.env.REACT_APP_URL}/notes/${id}`, obj, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getData();
      });
  }

  function deleteItem(id) {
    console.log(id);
    axios
      .delete(`${process.env.REACT_APP_URL}/notes/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        getData();
      });
  }

  console.log(notes);
  return (
    <Grid w="97%" m={"auto"} mt="30px" templateColumns="repeat(3, 1fr)" gap={6}>
      {notes.length &&
        notes.map((el) => {
          return (
            <CardItem {...el} updateItem={updateItem} deleteItem={deleteItem} />
          );
        })}
    </Grid>
  );
};

export default Notes;
