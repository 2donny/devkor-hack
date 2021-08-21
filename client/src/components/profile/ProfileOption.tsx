import styled from 'styled-components';
import { STitle } from './ProfileMain';
import { ProfileState, ProfileAction } from './types';
import { SInput, ExampleText, Box } from './ProfileDetail';

interface Props {
  title: string;
  state: ProfileState;
  dispatch: React.Dispatch<ProfileAction>;
}

export default function ProfileOption({ title, state, dispatch }: Props) {
  return (
    <Container>
      <STitle>{title}</STitle>
      <Box>
        <Indicator>관심사나 대화하고 싶은 주제를 적어주세요! </Indicator>
        <SInput
          placeholder="입력하기"
          value={state.talkingSubject}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: 'setTalkingSubject', payload: e.target.value })
          }
        />
        <ExampleText style={{ color: '#aaa' }}>
          #스타트업#맛집탐방 #친구만들기 #외국어
          #봉사활동#반려동물#코딩#대학원#여행#패션#연애#계절학기#취업#게임#음악#다이어트#운동#알바#과제#자기계발#우주#치맥#수다#비트코인#영화
          등등
        </ExampleText>
      </Box>
      <Box>
        <Indicator>활동이력을 적고 관련 친구들을 만나보세요.</Indicator>
        <SSInput
          value={state.bio}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            dispatch({ type: 'setBio', payload: e.target.value })
          }
          placeholder="전공/근무회사/가입한 동아리/학회 활동 등등"
        />
        <PageIndicator>2/2페이지</PageIndicator>
      </Box>
    </Container>
  );
}

const Container = styled.div``;

const Indicator = styled.p`
  color: #404d61;
  font-size: 16p;
  line-height: 24px;
  margin: 10px 0 5px;
`;

const SSInput = styled(SInput)`
  border: none;
  padding-left: 0px;
`;

const PageIndicator = styled.p`
  color: #a7b0c0;
  text-align: right;
  font-size: 14px;
  line-height: 24px;
`;
