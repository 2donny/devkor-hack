import { useState } from 'react';
import styled from 'styled-components';
import { TitleBox, Row, SImg } from '../auth/Login';
import { commonStyles } from '../../styles/styles';
import Modal from 'react-modal';
import { ArrowBackOutline } from 'react-ionicons';
import { SNav } from '../profile/ProfileLayout';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '15px',
    minHeight: '30vh',
    width: '70%',
    maxWidth: '375px',
    paddingBottom: '30px',
  },
};

export default function Call() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    type: '',
  });

  const closeModal = () => {
    setModalState({
      ...modalState,
      isOpen: false,
    });
  };

  const openModal = (type: 'question' | 'filtering') => {
    setModalState({
      isOpen: true,
      type,
    });
  };

  return (
    <Container>
      <HowtoUse onClick={() => openModal('question')}>
        사용 방법/문의하기
      </HowtoUse>
      <Wrapper>
        <STitleBox>
          <h1>8시에 만나는 고연대친구</h1>
          <Row>
            <h2>연고링</h2>
            <SImg src="/man1.png" />
            <SImg src="/woman1.png" />
          </Row>
        </STitleBox>
        <MainBox>
          <UpperBtn onClick={() => openModal('filtering')}>
            필터링 설정하기
          </UpperBtn>
          <BelowBtn>친구들과 통화하기</BelowBtn>
        </MainBox>
        <CautionBox>
          <h3>주의사항 ✅ </h3>
          <p>1. 꼭!! 크롬으로 접속해주셔야해요!</p>
          <p>
            2. 통화하기를 누른 후 ‘마이크 허용’을 해주셔야 통화를 즐길 수
            있어요!
          </p>
        </CautionBox>
      </Wrapper>
      <Modal
        isOpen={modalState.isOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Filtering Modal"
      >
        {modalState.type === 'filtering' ? (
          <>
            <SNav>
              <ArrowBackOutline
                color={'#00000'}
                title={'뒤로가기'}
                height="25px"
                width="25px"
                onClick={closeModal}
                style={{
                  cursor: 'pointer',
                }}
              />
              <span style={{ cursor: 'pointer', color: commonStyles.accent }}>
                확인
              </span>
            </SNav>
            <ModalWrapper>
              <h3>상대방의 성별을 선택해주세요</h3>
              <p>성별을 적용하는 경우 통화연결이 지연될 수 있어요!</p>
            </ModalWrapper>
          </>
        ) : (
          <ModalWrapper>
            <h3 className="green">&lt; 연고링 사용방법 &gt; </h3>
            <p className="green">
              오후 8시부터 새벽 2시까지만 연고링 통화서비스가 열려요! ※ 쪽지는
              시간제약 없이 24시간동안 보낼 수 있어요 랜덤 매칭으로 친구들과 7분
              동안 보이스톡 즐길 수 있어요. 친구와 통화를 할수록 친구의 정보를
              확인할 수 있어요 :D 3. 통화가 끝나면 친구 신청을 보내고 쪽지로 더
              친해져 보세요!
            </p>
            <BelowBtn>서비스 더 자세히 알아보기</BelowBtn>
          </ModalWrapper>
        )}
      </Modal>
    </Container>
  );
}
const Container = styled.div`
  padding: 1.5rem;
`;

const Wrapper = styled.div`
  min-height: 100vh;
  margin-top: 6.5rem;
`;

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .green {
    color: #25d482;
    line-height: 18px;
  }
  .green p {
    font-size: 11px;
  }
  h3 {
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;
    margin: 10px 0;
  }
  p {
    color: #929da9;
    font-size: 12px;
    line-height: 15px;
    margin: 25px 0;
  }
`;

const MainBox = styled.div`
  margin-top: 8.5rem;
`;

const STitleBox = styled(TitleBox)`
  margin: 0;
`;

const HowtoUse = styled.span`
  color: #929da9;
  line-height: 28px;
  float: right;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100%;
  padding: 18px 22px;
  border-radius: 8px;
  outline: none;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 10%), 0 2px 4px 0 rgb(0 0 0 / 10%);
  & + & {
    margin: 20px 0;
  }
  &:active {
    opacity: 0.5;
  }
`;

const UpperBtn = styled(Button)`
  background-color: #fff;
  border: 1px solid ${commonStyles.accent};
  color: ${commonStyles.accent};
`;

const BelowBtn = styled(Button)`
  color: #fff;
  border: 1px solid ${commonStyles.accent};
  background-color: ${commonStyles.accent};
`;

const CautionBox = styled.div`
  background-color: #d5fcea;
  border-radius: 8px;
  color: #25d482;
  font-size: 12px;
  padding: 20px;
  margin-top: 15px;
  h3 {
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    line-height: 17px;
  }
`;
