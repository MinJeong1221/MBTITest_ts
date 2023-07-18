import React from 'react';
import styled from 'styled-components';
import { Button, Image } from 'react-bootstrap';

import CatImage from '../assets/cat.jpg';
import { useNavigate } from 'react-router-dom';

function MainPage(): React.ReactElement {
  const navigate = useNavigate();

  const handleClickButton = () => [navigate('/question')];
  return (
    <>
      <Wrapper>
        <Header>예비집사 판별기</Header>
        <ContentsWrapper>
          <Title>나에게 맞는 주인님은?!</Title>
          <LogImage>
            <Image
              className="rounded-circle"
              src={CatImage}
              width={350}
              height={350}
            />
          </LogImage>
          <Desc>MBTI기반으로 하는 나랑 잘맞는 고양이 찾기!</Desc>
          <Desc>내가 집사가 되서 고양이를 키운다면???</Desc>
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
  font-family: 'jalnan';
`;
const Header = styled.div`
  background: #ffc;
  font-size: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
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
  font-size: 20px;
`;
const Desc = styled.div`
  font-size: 20px;
`;
