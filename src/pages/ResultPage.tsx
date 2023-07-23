import React from 'react';
import styled from 'styled-components';
import { Image, Button } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

import { ResultData } from '../stores/Result/ResultData';
import Header from '../components/Header';
import { IResult } from '../stores/Result/types';
import KakaoShareButton from '../components/KakaoShareButton';

function Result(): React.ReactElement {
  const [searchParmas] = useSearchParams();
  const mbti = searchParmas.get('mbti'); //나의 MBTI

  const testResult: IResult = ResultData.find(
    (dog: IResult) => dog.best === mbti,
  ) ?? {
    id: 0,
    name: '',
    best: '',
    desc: '',
    img: '',
    mbti: '',
  };
  // console.log({ TestResult });
  const friendDog = ResultData.find(
    (frienddog) => frienddog.best === testResult?.mbti,
  );
  return (
    <>
      <Wrapper>
        <Header type="title" questionNum={0} />
        <ContentsWrapper>
          <Title>결과 보기</Title>
          <ResultImage>
            <Image
              className="rounded-circle"
              src={testResult?.img}
              width={350}
            />
          </ResultImage>
          <Desc>
            {`"${testResult?.best}형"의 찰떡 궁합인 강아지는? "${testResult?.mbti}형" 강아지
            "${testResult?.name}"입니다`}
          </Desc>
          <Desc>
            {testResult?.name}은 {testResult?.best}와 찰떡궁합!!
          </Desc>
          <BestDesc>
            나온 강아지와 잘 맞는 형제 강아지로는 {friendDog?.name}입니다.
          </BestDesc>
          <ButtonWaper>
            <Button
              className="btn-danger"
              style={{ width: 170, marginTop: 20, marginRight: 20 }}
            >
              테스트 다시하기
            </Button>
            <KakaoShareButton data={testResult} />
          </ButtonWaper>
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
  background: #ccc;
  font-family: 'jalnan';
`;
const ContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  padding: 20px 60px 20px 60px;
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
const BestDesc = styled.div`
  font-size: 20px;
  color: blue;
`;
const ButtonWaper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
