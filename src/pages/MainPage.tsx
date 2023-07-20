import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';

import DogImage from '../assets/dog/dog.jpg';
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';

function MainPage(): React.ReactElement {
  const navigate = useNavigate();

  const handleClickButton = () => [navigate('/question')];
  return (
    <>
      <Wrapper>
        <Header type="header" questionNum={0} />
        <ContentsWrapper>
          <Title>나에게 맞는 주인님은?!</Title>
          <LogImage>
            <Image className="rounded-circle" src={DogImage} width={350} />
          </LogImage>
          <Desc>MBTI기반으로 하는 나랑 잘맞는 강아지 찾기!</Desc>
          <Desc>내가 강아지 주인이 되어서 강아지를 키운다면???</Desc>
          <Button
            variant="danger"
            onClick={handleClickButton}
            style={{ fontSize: 25, marginTop: 20, marginBottom: 20 }}
          >
            테스트 시작하기
          </Button>
        </ContentsWrapper>
      </Wrapper>
    </>
  );
}

export default MainPage;

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
  margin-top: 20px;
`;
const Title = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;
const LogImage = styled.div`
  width: 200;
  height: 200;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const Desc = styled.div`
  font-size: 15px;
`;
