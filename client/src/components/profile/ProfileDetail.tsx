import styled from 'styled-components';
import { Container, STitle } from './ProfileMain';
import { PageIndicator } from './ProfileOption';
import { ProfileState, ProfileAction } from './types';

interface Props {
  title: string;
  state: ProfileState;
  dispatch: React.Dispatch<ProfileAction>;
}

export default function ProfileDetail({ title, state, dispatch }: Props) {
  console.log('rendered!');
  return (
    <Container>
      <STitle>{title}</STitle>
      <Box>
        <SInput
          placeholder="입력하기"
          value={state.job}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: 'setJob', payload: e.target.value })
          }
        />
        <ExampleText style={{ color: '#aaa' }}>
          예시 =&gt; 졸업생/ 취업준비생/새내기/ 대학원생 /문과대생
          /공대생/미대생/의대생/음대생/ 마케터 준비생
          /디자이너/ceo/백수/기획자/개발자/프리랜서/운동선수/변호사/ vc / pm
          등등
        </ExampleText>
      </Box>
      <Box>
        <STitle>목표/버킷리스트</STitle>
        <STextArea
          placeholder="ex) &#13;&#10; 1. 1 년 안에 실리콘벨리가기 &#13;&#10; 2. 방학때 코딩 마스터&#13;&#10; 3. 미라클 모닝 &#13;&#10; 4. 사랑니빼기 &#13;&#10;"
          value={state.bucketList}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            dispatch({ type: 'setBucketList', payload: e.target.value })
          }
        />
      </Box>
      <PageIndicator>1/2페이지</PageIndicator>
    </Container>
  );
}

export const Box = styled.div`
  margin: 3.25rem 0;
  & + & {
    margin-top: 80px;
  }
`;

export const SInput = styled.input`
  width: 80%;
  padding: 16px;
  border: 1px solid #e1e3e6;
  border-radius: 8px;
  font-size: 16px;
  &::placeholder {
    color: #c4cbd8;
  }
  &:focus {
    outline: none;
  }
`;

export const STextArea = styled.textarea`
  width: 90%;
  min-height: 8rem;
  padding: 16px;
  border: 1px solid #e1e3e6;
  border-radius: 8px;
  font-size: 16px;
  &::placeholder {
    color: #c4cbd8;
  }
  &:focus {
    outline: none;
  }
`;

export const ExampleText = styled.p`
  color: #c4cbd8;
  font-size: 14px;
  line-height: 18px;
  margin: 1.25rem 0;
`;
