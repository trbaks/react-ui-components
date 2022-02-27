import React, { useState, useContext } from "react";

import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import axios from "axios";


import Loadingspinner from "../../src/Shared/UIComponents/Loadingspinner";
import Card from "../../src/Shared/UIComponents/Card"
// import {AuthContext} from '../Context/auth-context';

const style = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)"
};

const Login = () => {
  // const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const [isLoading, setIsloading] = useState(false);
  const [responseStatus, setResponseStatus] = useState();

  const [open, setOpen] = useState(false);
  const [modalHeader, setModalHeader] = useState();
  const [modalMessage, setModalMessage] = useState();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const formSubmitHandler = async event => {
    event.preventDefault();
    console.log(`${email} ${password}`);

    // const headers = {'Content-Type': 'application-json'}
    try {
      setIsloading(true);
      const response = await axios.get(
        `http://localhost:4000/users?email=${email}`
      );
      console.log(response);
      console.log(response.data);
      setIsloading(false);
      setResponseStatus(response.status);
      console.log(responseStatus);
      if (response.status === 200 && response.data[0].password === password) {
        setModalHeader("Successfully Logged In");
        localStorage.setItem("user", email);
        // auth.login();
        navigate("/")
        setModalMessage(response.statusText);
        onOpenModal();
      } 
      if (response.status === 200 && response.data[0].password !== password) {
        setModalHeader("Incorrect Credentials");
        setModalMessage(response.statusText);
        onOpenModal();
      } 
      setEmail("");
      setPassword("");
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
        <div style={{display: "flex", justifyContent: "center"}}>
          <b>Login</b>{" "}
        </div>
        <div style={{display: "flex", justifyContent: "center"}}>
          <Link to={"/signup"}>
            <i>Signup Instead</i>
          </Link>
        </div>
        <br></br>
        <form onSubmit={formSubmitHandler}>
        <div style={{display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div>
            <label>E-mail</label>
            <br></br>
            <input
              type="email"
              name="title"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
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
          </div>
          <br></br>
          <hr></hr>
          <div style={{display: "flex", justifyContent: "center"}}>
          <input type="submit" value="Submit"/>
          </div>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default Login;
