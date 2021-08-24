import React, { SetStateAction } from 'react';
import './SendChat.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useHistory } from 'react-router-dom';

const SendChat = ({
  setSendChat,
}: {
  setSendChat: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const history = useHistory();
  return (
    <div className="SendChatBackground">
      <div className="SendChatContainer">
        <div className="SendChatheader">
          <button className="SendChatBtn" onClick={() => setSendChat(false)}>
            <AiOutlineArrowLeft className="SendChatBack" size="17" />
          </button>
          <div onClick={() => history.push('/chat')} className="SendChatTitle">
            쪽지보내기
          </div>
        </div>
        <input
          className="SendChatInput"
          placeholder="내용을 입력하세요.
            매너있는 대화를 진행해주세요."
        />
        <div>
          <button className="SendChatSend">쪽지보내기</button>
        </div>
      </div>
    </div>
  );
};

export default SendChat;
