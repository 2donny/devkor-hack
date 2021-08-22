import React from "react";
import "./DetailChat.css";
import { IoIosSend } from "react-icons/io";
import { AiOutlineArrowLeft, AiOutlineMore } from "react-icons/ai";
import { useState } from "react";
import SendChat from "./SendChat";

const DetailChat = ({ setOpenDetailChat }) => {
  const [fromMe, setFromMe] = useState([true, false, true]);
  const [messages, setMessages] = useState([
    "참치김밥 무조건 추천추천 안암 올때 연락줘 ~~ 시간 괜찮으면 놀자!",
    "안녕 ㅎㅎ 반가워!! 마른햇살이 아니구 ㅋㅋㅋㅋ 고른햇살! 거기 진짜 진짜 맛있어 ㅎㅎ",
    "안녕~~~ 방금 통화한 연대생이야 ㅋㅋㅋ! 아까 알려준 고려대에 김밥 맛집이 어디라고 했지? 나 다음주에 안암가는데 한번 가보려구 ㅎㅎ 이름이 마른햇살이라고 했나?? 기억력이 안좋아서 ㅠ  ",
  ]);
  const [time, setTime] = useState(["1분전", "3분전", "5분전"]);
  const [sendChat, setSendChat] = useState(false);
  return (
    <div className="DetailChatBackground">
      <div className="DetailChatContainer">
        {sendChat ? <SendChat setSendChat={setSendChat} /> : null}
        <div className="DetailChatheader">
          <button
            className="DetailChatBtn"
            onClick={() => setOpenDetailChat(false)}
          >
            <AiOutlineArrowLeft className="DetailChatBack" size="17" />
          </button>
          <div className="DetailChatOpp">유쥬</div>
          <button className="DetailChatBtn" onClick={() => setSendChat(true)}>
            <IoIosSend className="DetailChatSend" size="31" />
          </button>
          <button className="DetailChatBtn">
            <AiOutlineMore className="DetailChatMore" size="31" />
          </button>
        </div>
        {messages.map((el, idx) => {
          return (
            <div className="DetailChatBody">
              {fromMe[idx] ? (
                <div className="DetailChatFromMe">보낸쪽지(나)</div>
              ) : (
                <div className="DetailChatToMe">받은쪽지(유쥬)</div>
              )}
              <div className="DetailChatTime">{time[idx]}</div>
              <div className="DetailChatMessage">{el}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DetailChat;
