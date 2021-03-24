import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '../Common/Button/Button';
import Logo from '../Common/Logo/Logo';
import Text from '../Common/Text/Text';
import TextBox from '../Common/TextBox/TextBox';
import playIcon from '../../public/icons/play-icon.svg'
import { Row, Col } from 'react-bootstrap';
import Utils from '../../Utils/GameService';

function Register() {
   let history = useHistory();
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const [confirmedPassword, setConfirmedPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

   const handleRegisterClick = (event) => {
      if (name.length > 0 && password.length > 0) {
         if (password === confirmedPassword) {
            history.push(Utils.REDIRECT_TO_LOGIN);
         }
         setErrorMessage("Password doesn't match. Please try again.");
      } else {
         setErrorMessage("Please provide credentials");
      }

   }
   const handleLoginClick = (event) => {
      history.push(Utils.REDIRECT_TO_LOGIN);
   }

   return (
      <Row>
         <Col>
            <Logo />
            <TextBox
               text={name}
               setText={setName}
               placeholder="Type your username"          >
            </TextBox>
            <TextBox
               text={password}
               setText={setPassword}
               placeholder="Type your password"
               type = "password">
            </TextBox>
            <TextBox
               text={confirmedPassword}
               setText={setConfirmedPassword}
               placeholder="Confirm your password"
               type = "password">
            </TextBox>
            <Text text={errorMessage} ></Text>

            <Button
               icon={playIcon}
               text="Register"
               onClick={handleRegisterClick} >
            </Button>
            <Button
               icon={playIcon}
               text="Login"
               onClick={handleLoginClick} >
            </Button>
         </Col>
      </Row>
   );
}

export default Register;
