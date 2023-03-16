import { Box, Button, Card, styled, Typography } from "@mui/material";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../../store/userSlice";

const Container = styled(Card)`
  width: 600px;
  height: 300px;
  margin: ${({ theme }) => theme.padding.large}px auto;
  border: 3px solid ${({ theme }) => theme.palette.secondary.main};
  display: grid;
  grid-template-columns: 50% 50%;
`;

const CountContainer = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  rowGap: `${theme.padding.small}px`,
  columnGap: `${theme.padding.small}px`,
}));

const CounterText = styled(Typography)`
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Counter = () => {
  const count = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  return (
    <Container>
      <Box
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: theme.padding.medium + "px",
        })}
      >
        <Typography variant="h1">Counter</Typography>
        <Typography variant="body1">
          This is a example of a counter to help show how to use MUI components
          and react redux
        </Typography>
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "12px",
        }}
      >
        <CounterText variant="h1">{count}</CounterText>
        <CountContainer>
          <Button variant="contained" onClick={() => dispatch(increment())}>
            Increment
          </Button>
          <Button variant="contained" onClick={() => dispatch(decrement())}>
            Decrement
          </Button>
          <Button
            variant="contained"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Increment by 5
          </Button>
          <Button
            variant="contained"
            onClick={() => dispatch(incrementByAmount(-5))}
          >
            Decrement by 5
          </Button>
        </CountContainer>
      </Box>
    </Container>
  );
};
