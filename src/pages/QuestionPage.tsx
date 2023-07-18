import React from 'react';

import { QuestionData } from '../stores/Question/QuestionData';

function Question(): React.ReactElement {
  return (
    <>
      <div>{QuestionData[0].title}</div>
      <div>{QuestionData[0].answera}</div>
      <div>{QuestionData[0].answerb}</div>
    </>
  );
}

export default Question;
