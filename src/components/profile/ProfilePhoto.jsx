import React from 'react'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProfilePhoto() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://scontent.ftun14-1.fna.fbcdn.net/v/t39.30808-6/300379143_3262941180654988_9104706331710546147_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qtoXSOlif6MAX8YtzAF&_nc_ht=scontent.ftun14-1.fna&oh=00_AfCL4lenx4oh_SIRdEe7XIAFQQuN8yHpHkprVSzR5rmpYA&oe=638BFA8C"
        />
        <Card.Body>
          <Card.Title>Hello !!</Card.Title>
        </Card.Body>
          </Card>
    </div>
  );
}

export default ProfilePhoto
