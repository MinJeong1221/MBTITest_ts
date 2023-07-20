import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { createSearchParams, useNavigate } from 'react-router-dom';

import { QuestionData } from '../stores/Question/QuestionData';
import Header from '../components/Header';

function QuestionPage(): React.ReactElement {
  const [questionNum, setQuestionNum] = useState(0);
  const [totalScore, setTotalScore] = useState([
    { id: 'EI', score: 0 },
    { id: 'SN', score: 0 },
    { id: 'TF', score: 0 },
    { id: 'JP', score: 0 },
  ]);
  const navigator = useNavigate();

  const handleClickAnswer = (ans: number, type: string) => {
    // if (type === 'EI') {
    //   // 기존 스코어에 더한 새로운 스코어 값
    //   const addScore = totalScore[0].score + ans;
    //   // 새로운 스코어를 반영한 새로운 객체
    //   const obj = { id: 'EI', score: addScore };
    //   // 새로운 객체를 기존에 토탈 스코어 변경
    //   totalScore.splice(0, 1, obj);
    // }

    const newScore = totalScore.map((s) =>
      s.id === type ? { id: s.id, score: s.score + ans } : s,
    );

    setTotalScore(newScore);

    if (QuestionData.length !== questionNum + 1) {
      //마지막 문제가 아닐경우
      setQuestionNum(questionNum + 1);
    } else {
      //마지막 문제일 경우
      const mbti = newScore.reduce(
        (acc, curr) =>
          acc +
          (curr.score >= 2 ? curr.id.substring(0, 1) : curr.id.substring(1, 2)),
        '',
      );

      console.log({ mbti });

      navigator({
        pathname: '/result',
        search: `?${createSearchParams({
          mbti: mbti,
        })}`,
      });
    }
  };

  // useEffect(() => {
  //   console.log('totalScore[0]', totalScore[0].score);
  // }, [totalScore[0].score]);

  return (
    <Wrapper>
      <Header type="progress" questionNum={questionNum} />
      <ContentsWrapper>
        <Title>{QuestionData[questionNum].title}</Title>
        <ButtonGroup>
          <Button
            variant="secondary"
            style={{ marginTop: '20px', minHeight: '80px' }}
            onClick={() => handleClickAnswer(1, QuestionData[questionNum].type)}
          >
            {QuestionData[questionNum].answera}
          </Button>
          <Button
            variant="secondary"
            style={{ marginTop: '20px', minHeight: '80px' }}
            onClick={() => handleClickAnswer(0, QuestionData[questionNum].type)}
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
  background: #ccc;
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
  text-align: center;
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
