import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import firebase from "../firebase/config";
import firebase2 from "firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signInWithGoogle = async (e) => {
    try {
      e.preventDefault();

      const provider = new firebase2.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();

      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "50%",
          backgroundColor: "#eee",
          borderRadius: 10,
          padding: 50,
        }}
      >
        <h1 className="text-center" style={{ color: "black" }}>
          Login
        </h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="text-black">Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="text-black">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button
              variant="outline-primary"
              type="submit"
              onClick={handleLogin}
            >
              Submit
            </Button>
            <Button
              variant="outline-warning"
              type="submit"
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </Button>

            <p className="text-black">
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
