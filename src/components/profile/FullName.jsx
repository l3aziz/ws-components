import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";

function FullName() {
  return (
    <div>
      <ListGroup>
        <ListGroup.Item action variant="warning">
          Mohamed Aziz
        </ListGroup.Item>
        <ListGroup.Item action variant="info">
          Gtari
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default FullName
