import {
  Box,
  Button,
  Card,
  TextField,
  styled,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateList } from "../store/bookSlice";

const Container = styled(Box)`
  width: 600px;
  height: 300px;
  margin: ${({ theme }) => theme.padding.large}px auto;
  display: grid;
  grid-template-columns: 50% 50%;
`;

const AddBookContainer = styled(TextField)`
  width: 580px;
  height: 90px;
`;

export const AddBook = () => {
  const [input, setInput] = React.useState("");
  const [error, setError] = React.useState("");

  const list = useSelector((state) => state.book.list);
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (input === "") {
      setError("Please Enter a Book Title!");
      return;
    }
    setInput("");
    dispatch(updateList([input]));
    setError("");
  }
  return (
    <Container id="addBook">
      <Card>
        <TextField
          variant="outlined"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            // if (error) {
            //   setError("");
            // }
          }}
        />
        <Button onClick={handleSubmit} variant="contained">
          Add Book
        </Button>
        <Typography sx={(theme) => ({ color: theme.palette.secondary.main })}>
          {error}
        </Typography>
      </Card>
      <Card>
        {list.map((book) => (
          <Box key={book}>
            <Typography>{book}</Typography>
          </Box>
        ))}
      </Card>
    </Container>
  );
};
