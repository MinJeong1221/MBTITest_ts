import React from 'react';
import styled from 'styled-components';

import { ProgressBar } from 'react-bootstrap';
import { QuestionData } from '../stores/Question/QuestionData';

interface Props {
  type: string;
  questionNum: number;
}

function Header(props: Props) {
  return (
    <>
      {props.type === 'progress' ? (
        <ProgressWrapper>
          <ProgressBar
            striped
            variant="warning"
            now={Math.round((props.questionNum / QuestionData.length) * 100)}
            label={`${Math.round(
              (props.questionNum / QuestionData.length) * 100,
            )}%`}
            style={{ width: '100%', height: '40px' }}
          />
        </ProgressWrapper>
      ) : (
        <TitleWrapper style={{ backgroundColor: '#ffc' }}>
          예비 강아지주인 판별기
        </TitleWrapper>
      )}
    </>
  );
}

export default Header;

const ProgressWrapper = styled.div`
  font-size: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'jalnan';
  padding: 20px;
`;
const TitleWrapper = styled.div`
  background: #ffc;
  font-size: 40px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-family: 'jalnan';
`;
