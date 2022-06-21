import React from "react";
import { Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./action";

const Form = () => {
  const myState = useSelector((state) => state.changeTheNumber);

  const dispatch = useDispatch();

  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>
            <Button variant="primary" onClick={() => dispatch(incNumber)}>
              Increment
            </Button>
          </th>
          <th>{myState}</th>
          <th>
            <Button variant="success" onClick={() => dispatch(decNumber)}>
              Drecement
            </Button>
          </th>
        </tr>
      </thead>
    </Table>
  );
};

export default Form;
