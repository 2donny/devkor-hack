import React from "react";
import "./SendChat.css";
import { AiOutlineArrowLeft } from "react-icons/ai";

const SendChat = ({ setSendChat }) => {
  return (
    <div className="SendChatBackground">
      <div className="SendChatContainer">
        <div className="SendChatheader">
          <button className="SendChatBtn" onClick={() => setSendChat(false)}>
            <AiOutlineArrowLeft className="SendChatBack" size="17" />
          </button>
          <div className="SendChatTitle">쪽지보내기</div>
        </div>
        <input
          className="SendChatInput"
          placeholder="내용을 입력하세요.
            매너있는 대화를 진행해주세요."
        />
        <div display="relative">
          <button className="SendChatSend">쪽지보내기</button>
        </div>
      </div>
    </div>
  );
};

export default SendChat;
