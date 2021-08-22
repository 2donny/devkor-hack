import React from "react";
import { useState } from "react";
import "./Chatting.css";
import DetailChat from "./DetailChat";

const Chatting = () => {
  const [openDetailChat, setOpenDetailChat] = useState(true);

  return (
    <div className="ChattingBackground">
      <div className="ChattingContainer">
        {openDetailChat ? (
          <DetailChat setOpenDetailChat={setOpenDetailChat} />
        ) : null}
        <div className="chat">쪽지</div>
        <img className="chatImage" src="img/chat.png" />
        <div className="chatExplain">
          <strong>쪽지하기</strong> 통화가 즐거우셨나요? 친구신청을 통해 친구가
          되었어요! 쪽지를 통해 서로 소통 해보세요!😀
        </div>
        {/* <div className="chatZero">
          쪽지가 없어요 :(
          <br /> 7분 통화 후 마음에 드는 친구에게 친구신청을 해보세요!
        </div> */}
        <button className="chatUser" onClick={() => setOpenDetailChat(true)}>
          <img className="chatUserImage" src="img/user.png" />
          <div vertical-align="true" display="block">
            <div className="chatUserName">감바스</div>
            <div className="chatUserChat">친구에게 쪽지를 보내보세요.</div>
          </div>
        </button>
        <button className="chatUser" onClick={() => setOpenDetailChat(true)}>
          <img className="chatUserImage" src="img/user.png" />
          <div vertical-align="true" display="block">
            <div className="chatUserName">감바스</div>
            <div className="chatUserChat">친구에게 쪽지를 보내보세요.</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Chatting;
