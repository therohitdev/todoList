import React, { useState } from 'react';
import { Form, Col, Row, Container } from 'react-bootstrap'
import axios from "axios";

import { useSelector, useDispatch } from 'react-redux'
import { counterUpFun } from '../redux/counter/action';

export default function Login() {
  const [data, setData] = useState({});


  const counter = useSelector(state => state);
  const dipatch = useDispatch();

  function updateData(e){
    setData({...data, [e.target.name]: e.target.value});
  }

  function submitData(e){
    e.preventDefault();
    axios.get(`http://localhost:4000/users?email=${data.email}&password=${data.password}`)
      .then(res => {
        if(res.data.length){
          alert("Login succesful");
          window.localStorage.setItem("userData", JSON.stringify(res.data[0]));
        }
        else{
          alert("Please check your data");
        }
      })
      .catch(err => console.log(err));
    console.log(data);
  }
  
  return (
    <>
      <button onClick={() => dipatch(counterUpFun())}>COUNT UP</button>
      <Container className="bg-secondary" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        <div className="mt-5 w-50 border bg-light p-2">
          <Form onSubmit={submitData}>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control type="email" name="email" onChange={(e) => updateData(e)} />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" name="password" onChange={(e) => updateData(e)} placeholder="Password" />
              </Col>
            </Form.Group>
            <Form.Control type="submit" className="btn btn-primary" value="Submit" />
          </Form>
        </div>
      </Container>

    </>
  )
}
