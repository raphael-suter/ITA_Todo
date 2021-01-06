import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  ButtonGroup,
  Card,
  Container,
  Form,
  ListGroup,
} from "react-bootstrap";
import CheckBox from "./CheckBox";
import { Trash } from "react-bootstrap-icons";

const App = () => {
  const [id, setId] = useState(0);
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState(0);

  const addTodo = () => {
    setTodos([{ id, text: value, done: false }, ...todos]);
    setValue("");

    setId(id + 1);
  };

  const deleteTodo = (id) => {
    const list = todos.slice();

    for (let index = 0; index < list.length; index++) {
      if (list[index].id === id) {
        list.splice(index, 1);
        break;
      }
    }

    setTodos(list);
  };

  const changeState = (id) => {
    const list = todos.slice();

    for (let index = 0; index < list.length; index++) {
      if (list[index].id === id) {
        list[index].done = !list[index].done;
        break;
      }
    }

    setTodos(list);
  };

  const getFilter = (index) => {
    switch (index) {
      case 1:
        return (item) => !item.done;
      case 2:
        return (item) => item.done;
      default:
        return () => true;
    }
  };

  return (
    <Container className="my-5">
      <Card>
        <Card.Header className="bg-info text-light font-weight-bold">
          Todos
        </Card.Header>
        <Card.Body>
          <Form className="d-flex">
            <Form.Group className="flex-fill mb-0 mr-3">
              <Form.Control
                type="text"
                value={value}
                onChange={(evt) => setValue(evt.target.value)}
              />
            </Form.Group>
            <Button variant="info" disabled={value === ""} onClick={addTodo}>
              +
            </Button>
          </Form>
          <ButtonGroup className="mt-3 w-100">
            {["All", "Active", "Done"].map((item, index) => (
              <Button
                key={index}
                variant={`${index === filter ? "" : "outline-"}secondary`}
                onClick={() => setFilter(index)}
              >
                {item}
              </Button>
            ))}
          </ButtonGroup>
          {todos.length > 0 && (
            <ListGroup className="mt-3">
              {todos
                .filter(getFilter(filter))
                .map(({ id, text, done }, index) => (
                  <ListGroup.Item
                    className="d-flex justify-content-between align-items-center"
                    key={index}
                  >
                    <div className="d-flex align-items-center">
                      <CheckBox
                        checked={done}
                        onChange={() => {
                          changeState(id);
                        }}
                      />
                      {text}
                    </div>
                    <Button
                      variant="danger"
                      className="d-flex"
                      onClick={() => deleteTodo(id)}
                    >
                      <Trash />
                    </Button>
                  </ListGroup.Item>
                ))}
            </ListGroup>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
