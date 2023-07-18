import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';

import { QuestionData } from '../stores/Question/QuestionData';
import Header from '../components/Header';

function QuestionPage(): React.ReactElement {
  const [questionNum, setQuestionnum] = useState(0);

  const handleClickAnswer = () => {
    setQuestionnum(questionNum + 1);
  };
  return (
    <Wrapper>
      <Header type="progress" questionNum={questionNum} />
      <ContentsWrapper>
        <Title>{QuestionData[questionNum].title}</Title>
        <ButtonGroup>
          <Button variant="secondary" onClick={handleClickAnswer}>
            {QuestionData[questionNum].answera}
          </Button>
          <Button
            variant="secondary"
            style={{ marginTop: '20px' }}
            onClick={handleClickAnswer}
          >
            {QuestionData[questionNum].answerb}
          </Button>
        </ButtonGroup>
      </ContentsWrapper>
    </Wrapper>
  );
}

export default QuestionPage;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'jalnan';
`;
const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  font-size: 30px;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 25px;
  button {
    font-size: 20px;
  }
`;
