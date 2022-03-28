import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import firebase from "../firebase/config";
import { Card } from "react-bootstrap";

const User = (props) => {
  const user = props.user;
  const [isShowing, setIsShowing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [gen, setGen] = useState(user.gen);

  const handleDelete = async () => {
    try {
      firebase.firestore().collection("users").doc(user.id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async () => {
    try {
      let userData = {
        id: user.id,
        name: name,
        email: email,
        gen: gen,
      };

      firebase.firestore().collection("users").doc(user.id).update(userData);

      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClose = () => {
    setIsShowing(false);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "20rem" }}>
          <Card.Body className="justify-content-between fs-5">
            <Card.Title className="text-primary">
              Name:<span className="text-dark">{user.name}</span>
            </Card.Title>
            <Card.Text className="text-primary">
              Email:<span className="text-dark">{user.email}</span>
            </Card.Text>
            <Card.Text className="text-primary ">
              Gen:<span className="text-dark">{user.gen}</span>
            </Card.Text>
            <div className="d-flex justify-content-between">
              <Button
                onClick={() => setIsShowing(true)}
                variant="outline-primary"
                size="lg"
              >
                Edit
              </Button>
              <Button variant="outline-danger" size="lg" onClick={handleDelete}>
                Delete
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>

      <Modal show={isShowing} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={gen}
            onChange={(e) => setGen(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default User;
