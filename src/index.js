import React, { useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Container, Form, ListGroup } from "react-bootstrap";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");

  const addTodo = () => {
    setTodos([value, ...todos]);
    setValue("");
  };

  const deleteTodo = (index) => {
    const list = todos.slice();
    list.splice(index, 1);

    setTodos(list);
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
          {todos.length > 0 && (
            <ListGroup className="mt-3">
              {todos.map((todo, index) => (
                <ListGroup.Item
                  className="d-flex justify-content-between align-items-center"
                  key={index}
                >
                  {todo}
                  <Button variant="danger" onClick={() => deleteTodo(index)}>
                    Delete
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
