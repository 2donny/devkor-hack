import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { IoCall } from 'react-icons/io5';
import './WaitingModal.css';
import { useHistory } from 'react-router-dom';

const modalBackground = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const style = {
  background: '#333333',
  color: 'white',
};

const WaitingModal = () => {
  const history = useHistory();

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="waitingModalBackground"
        variants={modalBackground}
        initial="hidden"
        animate="visible"
      >
        <div className="waitingModalContainer">
          <button
            className="waitingModalHeader"
            onClick={() => (window.location.href = '/call')}
          >
            <AiOutlineArrowLeft size="15" color="black" />
          </button>
          <div className="waitingModalBody">
            <div className="waitingModalTitle">8시에 만나는 연고대친구</div>
            <div className="waitingModalContent">통화 연결중...</div>
            <div className="waitingModalEllipse4" />
            <div className="waitingModalEllipse3" />
            <div className="waitingModalEllipse2" />
            <div className="waitingModalEllipse1">
              <IoCall className="waitingModalCall" size="33" />
            </div>
          </div>
          <div className="waitingModalFooter">
            연고링 이용 tip 통화나 채팅시 상대방을 존중해주세요. 연고링은 데이팅
            서비스가 아닙니다! 부담스러운 요구는 no no ! 코로나로 대학친구와의
            교류가 없는 상황이 안타까워서 만든 서비스로 현재 아무런 이익
            목적없이 운영이 되고 있어요. 많은 피드백 부탁드리겠습니다 ~ :)
            소문도 많이 내주실꺼죵? ㅎㅎ
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default WaitingModal;
