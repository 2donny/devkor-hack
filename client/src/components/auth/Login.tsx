import styled from 'styled-components';
import KakaoLogin from 'react-kakao-login';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

interface Props {
  history: History;
}

const APIKEY = '00e1c763b85e22f5a25c3c42845c6794';

function Login({ history }: Props) {
  const loginSuccess = (props: any) => {
    const { profile, response } = props;
    history.push('/me', {
      gender: profile?.kakao_account.gender,
      nickname: profile?.kakao_account?.profile?.nickname,
      profile_image_url: profile?.kakao_account?.profile?.profile_image_url,
    });
  };

  return (
    <Container>
      <TitleBox>
        <h1>8시에 만나는 고연대친구</h1>
        <Row>
          <h2>연고링</h2>
          <SImg src="/man1.png" />
          <SImg src="/woman1.png" />
        </Row>
      </TitleBox>
      <LoginBox>
        <p>간편하게 로그인하고 시작하기</p>
        <KakaoLogin
          token={APIKEY}
          onSuccess={loginSuccess}
          onFail={(response) => alert(response)}
          useLoginForm
          style={{
            width: '100%',
            background: 'rgb(255, 235, 0)',
            border: 'none',
            padding: '15px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          <p className="kakaoText">카카오 계정으로 로그인</p>
        </KakaoLogin>
      </LoginBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  min-height: 100vh;
  padding: 0 2rem;
`;

export const Row = styled.div`
  display: flex;
`;

export const SImg = styled.img`
  object-fit: conver;
  width: 50px;
  height: 50px;
`;

export const TitleBox = styled.div`
  margin: 2rem 0;
  font-weight: 700;
  h1 {
    color: #929da9;
    font-size: 21px;
  }
  h2 {
    color: #3a3c3f;
    font-size: 48px;
    margin: 1rem 0;
  }
`;

const LoginBox = styled.div`
  padding-bottom: 50px;
  p {
    color: gray;
    text-align: center;
    font-size: 12px;
    margin: 10px 0;
  }
  .kakaoText {
    color: black;
    font-size: 16px;
    font-weight: 600;
    margin: 0;
  }
`;

export default withRouter(Login);
