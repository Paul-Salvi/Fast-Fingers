import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import './initialize.css'
import Utils from '../../Utils/GameService';
import Button from '../Common/Button/Button';
import Logo from '../Common/Logo/Logo';
import Text from '../Common/Text/Text';
import TextBox from '../Common/TextBox/TextBox';
import DropDown from '../Common/DropDown/DropDown';
import playIcon from '../../public/icons/play-icon.svg'
import { Row, Col } from 'react-bootstrap';

function Initialize() {
  let history = useHistory();
  const [difficulty, setDifficulty] = useState('');
  const [name, setName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isError, setErrorFlag] = useState(false);
  const difficulties = [
    { label: "Easy", value: "Easy" },
    { label: "Medium", value: "MEDIUM" },
    { label: "Hard", value: "HARD" }
  ]
  const handleStartClick = (event) => {
    if (name.length > 0) {
      Utils.saveUserSession(name.toLocaleUpperCase(), difficulty.toLocaleUpperCase());
      history.push(Utils.REDIRECT_TO_GAME);
    } else {
      setErrorMessage("Please provide username");
      setErrorFlag(true);
    }
  }

  return (
    <Row>
      <Col>
        <Logo />
        <TextBox
          text={name}
          setText={setName}
          placeholder="Type your name"
          isError={isError}>
        </TextBox>
        <Text text={errorMessage} ></Text>
        <DropDown
          items={difficulties}
          setItem={setDifficulty}
          placeholder="Difficulty Level">
        </DropDown>
        <Button
          icon={playIcon}
          text="Start Game"
          onClick={handleStartClick} >
        </Button>
      </Col>
    </Row>
  );
}

export default Initialize;
