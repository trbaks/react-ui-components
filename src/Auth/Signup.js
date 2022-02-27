import React, { useState } from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import {Link, useNavigate} from 'react-router-dom'

import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import Loadingspinner from "../../src/Shared/UIComponents/Loadingspinner";
import Card from "../Shared/UIComponents/Card";

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const Signup = () => {
  const navigate = useNavigate()  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();

  const [isLoading, setIsloading] = useState(false);
  const [responseStatus, setResponseStatus] = useState();

  const [open, setOpen] = useState(false);
  const [modalHeader, setModalHeader] = useState();
  const [modalMessage, setModalMessage] = useState();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  
  const formSubmitHandler = async event => {
    event.preventDefault();
    console.log(`${userName} ${email} ${password}`);
    const body = {
      id: uuidv4(),
      userName,
      email,
      password,
      role: "admin",
      dateCreated: "18-Feb-2022"
    };
    // const headers = {'Content-Type': 'application-json'}
    try {
      setIsloading(true);
      const response = await axios.post(`http://localhost:4000/users`, body);
      console.log(response);
      setIsloading(false);
      setResponseStatus(response.status);
      console.log(responseStatus);
      if (response.status === 201) {
        setModalHeader("Successfully Signed Up");
        localStorage.setItem("user", email);
        setModalMessage(response.statusText);
        onOpenModal();
      }
      setEmail("");
      setPassword("");
      setUserName("")
      navigate('/');
      
    } catch (error) {
      console.log(error);
      setIsloading(false);
      setModalHeader("Couldn't create, something went wrong");
      setModalMessage(error.message);

      onOpenModal();
    }
  };
  return (
    <React.Fragment>
      {isLoading && (
        <div style={style}>
          <Loadingspinner />
        </div>
      )}
      <div>
        {/* <button onClick={onOpenModal}>Open modal</button> */}
        <Modal open={open} onClose={onCloseModal} center>
          <div>
            <h3>{modalHeader}</h3>
          </div>
          {/* <div>{modalStatusCode}</div> */}
          <div align="center">{modalMessage}</div>
        </Modal>
      </div>
      <Card style={style}>
        <div style={{display: "flex", justifyContent: "center"}}><b>Sign Up</b> </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Link to={'/auth'}>
          <i>Login Instead</i>
          </Link>
        
        </div>
        <form onSubmit={formSubmitHandler}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <div>
            <label>Name</label>
            <br></br>
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={e => setUserName(e.target.value)}
            />
          </div>
          <br></br>
          <div>
            <label>E-mail</label>
            <br></br>
            <div >
            <input
              type="email"
              name="title"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            </div>
          </div>

          <br></br>
          <div>
            <label>Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>

          <br></br>
          </div>
          <hr></hr>
          <div style={{display: "flex", justifyContent: "center"}}>
          <input type="submit" value="Submit" />
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Signup;
