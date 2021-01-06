import { CheckCircle, Circle } from "react-bootstrap-icons";
import React from "react";
import { Button } from "react-bootstrap";

const CheckBox = ({ checked, onChange }) => {
  return (
    <Button
      variant="link"
      className="m-0 p-0 mr-2 d-flex text-secondary"
      onClick={() => onChange(!checked)}
    >
      {checked ? <CheckCircle /> : <Circle />}
    </Button>
  );
};

export default CheckBox;
