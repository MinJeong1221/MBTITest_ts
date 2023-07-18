import React from 'react';
import { ResultData } from '../stores/Result/ResultData';

function Result(): React.ReactElement {
  return (
    <>
      <img src={ResultData[0].img} width={350} />
      <div>{ResultData[0].name}</div>
      <div>{ResultData[0].desc}</div>
    </>
  );
}

export default Result;
