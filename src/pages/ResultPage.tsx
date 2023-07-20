import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { ResultData } from '../stores/Result/ResultData';
import Header from '../components/Header';
import DogImage from '../assets/dog/dog.jpg';

function Result(): React.ReactElement {
  const [searchParmas] = useSearchParams();
  const mbti = searchParmas.get('mbti');
  return (
    <>
      <Wrapper>
        <Header type="title" questionNum={0} />
        <ContentsWrapper>
          <Title>결과 보기</Title>
          <ResultImage>
            <Image className="rounded-circle" src={DogImage} width={350} />
          </ResultImage>
          <Desc>나와 찰떡 궁합인 강아지는? {mbti}강아지 입니다</Desc>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
}

export default Result;

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
  margin-top: 20px;
  padding: 20px;
`;
const Title = styled.div`
  margin-top: 20px;
  font-size: 25px;
`;
const ResultImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 20px;
`;
