import React, { useEffect } from 'react';

import { Button } from 'react-bootstrap';
import { IResult } from '../stores/Result/types';

interface Props {
  data: IResult;
}

const Kakao = (Window as any).Kakao;

function KakaoShareButton(props: Props) {
  const url = 'https://dogmbti-test-ts.netlify.app';
  const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.init('091978aaa080d6481ed3f179e9614b6d');
  }, []);

  const sharekakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '예비 강아지주인 판별기 결과',
        description: `당신이 강아지를 키운다면 가장 잘 맞는 고양이는 ${props.data.name}입니다.}`,
        imageUrl: url + props.data.img,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      social: {
        likeCount: 10,
        commentCount: 20,
        sharedCount: 30,
      },
      buttons: [
        {
          title: '나도 테스트 하러 가기',
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
        {
          title: '앱으로 이동',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  };
  return (
    <Button
      onClick={sharekakao}
      className="btn-warning"
      style={{ width: 170, marginTop: 20 }}
    >
      카카오톡 공유하기
    </Button>
  );
}

export default KakaoShareButton;
