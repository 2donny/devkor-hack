import styled from 'styled-components';

interface Props {
  title: string;
}

export default function ProfileMain({ title }: Props) {
  return (
    <Container>
      <STitle>{title}</STitle>
      <ProfileImageWrapper>
        <p className="green">프로필사진 업로드하기</p>
        <p className="gray">
          자신의 개성을 나타낼 수 있는 사진으로 업로드해주세요 :D 안심하세요!
          프로필 사진은 통화가 종료된 후에 공개되어요.
        </p>
      </ProfileImageWrapper>
    </Container>
  );
}

const Container = styled.div``;

const STitle = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  margin: 1.5rem 0;
`;

const ProfileImageWrapper = styled.div`
  margin: 1.5rem 0;
  .green {
    color: #25d482;
    font-size: 13px;
    font-weight: 700;
  }
  .gray {
    color: #929da9;
    font-size: 10px;
    font-weight: 500;
  }
`;
