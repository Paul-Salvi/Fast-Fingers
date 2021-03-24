import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import Button from '../Common/Button/Button';
import Logo from '../Common/Logo/Logo';
import Text from '../Common/Text/Text';
import TextBox from '../Common/TextBox/TextBox';
import playIcon from '../../public/icons/play-icon.svg'
import { Row, Col } from 'react-bootstrap';
import Utils from '../../Utils/GameService';

function Login() {
   let history = useHistory();
   const [name, setName] = useState('');
   const [password, setPassword] = useState('');
   const [errorMessage, setErrorMessage] = useState('');

   const handleRegisterClick = (event) => {
      history.push(Utils.REDIRECT_TO_REGISTER);
   }

   const handleLoginClick = (event) => {
      if (name.length > 0 && password.length > 0) {
         history.push(Utils.REDIRECT_TO_START);
      } else {
         setErrorMessage("Please provide valid credentials");

      }
   }

   return (
      <Row>
         <Col>
            <Logo />
            <TextBox
               text={name}
               setText={setName}
               placeholder="Type your username">
            </TextBox>
            <TextBox
               text={password}
               setText={setPassword}
               placeholder="Type your password">
            </TextBox>
            <Text text={errorMessage} ></Text>

            <Button
               icon={playIcon}
               text="Login"
               onClick={handleLoginClick} >
            </Button>
            <Button
               icon={playIcon}
               text="Register"
               onClick={handleRegisterClick} >
            </Button>
         </Col>
      </Row>
   );
}

export default Login;
