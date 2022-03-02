import React, { useState } from "react";
import { addUserAction } from "../actions/actions";
import { connect } from "react-redux";
import { v4 as uuid } from "uuid";
import "../Edit/App.css"
import { FormControl, FormGroup, FormLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";


const UserForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newUser = {
      id: uuid(),
      name: name,
      email: email,
      gen: gen,
    };

    props.addUser(newUser);
  };

  return (
    <div className="d-flex justify-content-center" > 
    <Form className="rounded p-4 p-sm-6" onSubmit={handleSubmit} >
      <FormGroup className="mb-3" controlId="formBasicName">
        <h1>USER FORM</h1>
      <FormLabel>Name</FormLabel>
      <FormControl type="text"
       placeholder="Name"  onSubmit={handleSubmit}
       value={name}
       onChange={(e) => setName(e.target.value)} />
        </FormGroup>
      
        <FormGroup className="mb-3" controlId="formBasicEmail">
      <FormLabel>Email</FormLabel>
      <FormControl type="email"
       placeholder="Enter Email"  onSubmit={handleSubmit}
       value={email}
       onChange={(e) => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup className="mb-3" controlId="formBasicEmail">
      <FormLabel>Gen</FormLabel>
      <FormControl type=""
       placeholder="Gen"  onSubmit={handleSubmit}
       value={gen}
       onChange={(e) => setGen(e.target.value)} />
        </FormGroup>
        <button type="submit" class="w-100 mt-2 btn btn-primary">Submit</button>
      </Form>
      </div>
    
  );
};

//aka mapDispatchToProps
const sendActionAsProps = {
  addUser: addUserAction,
};

export default connect(null, sendActionAsProps)(UserForm);
