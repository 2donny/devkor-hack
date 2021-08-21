import { MouseEvent } from 'react';
import styled from 'styled-components';
import { ProfileAction, ProfileState } from './types';

interface Props {
  title: string;
  state: ProfileState;
  dispatch: React.Dispatch<ProfileAction>;
}

export default function ProfileMain({ title, state, dispatch }: Props) {
  const handleFileOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return null;

    const files = e.target.files;
    const __file = files[0];
    const __size = files[0]?.size;

    if (__size > 10000000) {
      // 10MB 이상이면 용량 제한
      return alert(
        '사진 최대 용량을 초과했습니다. 사진 용량은 최대 10MB입니다. ',
      );
    }

    const fileReader = new FileReader();
    fileReader.readAsDataURL(__file);
    fileReader.onload = (e) => {
      console.log(e.target?.result);
      dispatch({ type: 'setProfileImg', payload: e.target!.result as string });
    };
    dispatch({ type: 'setProfileFormData', payload: __file });
  };

  return (
    <Container>
      <STitle>{title}</STitle>
      <ProfileImageWrapper htmlFor="input-file">
        <img src={state.profileImg ? state.profileImg : '/unknown.png'} />
        <p className="green">프로필사진 업로드하기</p>
        <p className="gray">
          자신의 개성을 나타낼 수 있는 사진으로 업로드해주세요 :D 안심하세요!
          프로필 사진은 통화가 종료된 후에 공개되어요.
        </p>
      </ProfileImageWrapper>
      <input
        id="input-file"
        type="file"
        onChange={handleFileOnChange}
        style={{ display: 'none' }}
      />
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

const ProfileImageWrapper = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
  text-align: center;
  cursor: pointer;
  .green {
    color: #25d482;
    font-size: 13px;
    font-weight: 700;
  }
  .gray {
    color: #929da9;
    font-size: 10px;
    font-weight: 500;
    padding: 0 30px;
    margin: 10px 0;
    line-height: 12px;
  }
  img {
    width: 100px;
    height: 100px;
    margin: 20px 0 15px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
  }
`;
