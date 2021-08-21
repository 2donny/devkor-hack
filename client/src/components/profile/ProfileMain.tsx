import { MouseEvent } from 'react';
import styled from 'styled-components';
import { ProfileAction, ProfileState } from './types';
import './ProfileMain.css';

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

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  console.log(state.name, state.gender);
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

      {/* 정재형 코드 */}
      <form onSubmit={onSubmit}>
        <input
          className="name"
          type="text"
          placeholder="이름을 적어주세요."
          value={state.name}
          onChange={() => dispatch({ type: 'setName', payload: state.name })}
          required
        />
        <br />

        <select
          className="univ"
          name="univ"
          value={state.univ}
          onChange={() => dispatch({ type: 'setUniv', payload: state.univ })}
          required
        >
          <option>학교를 선택해주세요.</option>
          <option>고려대</option>
          <option>서울대</option>
          <option>연세대</option>
        </select>

        <div className="three">
          <input
            type="text"
            className="age"
            // value= {age}
            value={state.age}
            onChange={() => dispatch({ type: 'setAge', payload: state.age })}
            required
          />
          <br />

          <div className="agetext">
            부담가지지 마세요~ 나이는 20초 20중 20후 30초 방식으로 표기가 되요!
          </div>

          <select
            className="mbti"
            name="mbti"
            value={state.mbti}
            onChange={() => dispatch({ type: 'setMbti', payload: state.mbti })}
            required
          >
            <option value="">MBTI를 선택해주세요.</option>
            <option>ISTJ</option>
            <option>ISFJ</option>
            <option>INFJ</option>
            <option>INTJ</option>
            <option>ISTP</option>
            <option>ISFP</option>
            <option>INFP</option>
            <option>INTP</option>
            <option>ESTP</option>
            <option>ESFP</option>
            <option>ENFP</option>
            <option>ENTP</option>
            <option>ESTJ</option>
            <option>ESFJ</option>
            <option>ENFJ</option>
            <option>ENTJ</option>
          </select>

          <select
            className="area"
            name="area"
            value={state.location}
            onChange={() =>
              dispatch({ type: 'setLocation', payload: state.location })
            }
            required
          >
            <option value="">지역을 선택해주세요.</option>
            <option>서울</option>
            <option>경기 분당 수원권</option>
            <option>경기 안양 과천 부천권</option>
            <option>경기 구리 남양주 하남권</option>
            <option>경기 의정부 파주 고양권</option>
            <option>인천</option>
            <option>대전</option>
            <option>충북</option>
            <option>충남</option>
            <option>강원</option>
            <option>부산</option>
            <option>경북</option>
            <option>경남</option>
            <option>대구</option>
            <option>울산</option>
            <option>광주</option>
            <option>전북</option>
            <option>전남</option>
            <option>제주</option>
          </select>
        </div>

        <div className="gender">
          <div className="gendertext">성별을 선택해주세요</div>
          <div>
            <span>
              <input
                type="radio"
                name="gender"
                value={state.gender}
                onChange={() =>
                  dispatch({ type: 'setGender', payload: 'male' })
                }
                required
              ></input>
              남
              <input
                type="radio"
                name="gender"
                value={state.gender}
                onChange={() =>
                  dispatch({ type: 'setGender', payload: 'female' })
                }
              ></input>
              여
            </span>
          </div>
        </div>

        <div className="texttext">개성있는 자기소개!</div>
        <textarea
          className="text"
          // value= {age}
          placeholder="tip. 어떤 친구와 대화하고 싶은지 적어두면 더 좋아요! &#10;예시) 미대에 다니는 다양한 삶을 살고싶어하는 미개봉화석^^&#10;요즘 스타트업에 관심이 생겨서 관련하신 분들과 이야기하면 좋을 것 같아용 ㅎㅎ"
          value={state.intro}
          onChange={() => dispatch({ type: 'setIntro', payload: state.intro })}
          required
        />
        <br />

        <button className="btn" type="submit">
          확인
        </button>
      </form>
    </Container>
  );
}

export const Container = styled.div``;

export const STitle = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  margin: 2.5rem 0;
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
