import React from "react";
import { useState } from "react";
import GetChattingData from "../query/GetChattingData";
import "./Chatting.css";
import DetailChat from "./DetailChat";

const Chatting = () => {
  const [openDetailChat, setOpenDetailChat] = useState(false);
  const [query, setQuery] = useState(true);
  const [chatUserImageList, setChatUserImageList] = useState([]);
  const [chatUserList, setChatUserList] = useState(["유쥬", "누구"]);
  const [chatList, setChatList] = useState(["안녕", "쪽지를 보내보세요!"]);
  const [selectedUser, setSelectedUser] = useState("");

  return (
    <div className="ChattingBackground">
      <div className="ChattingContainer">
        {query ? (
          <GetChattingData
            setQuery={setQuery}
            setChatUserImageList={setChatUserImageList}
            setChatUserList={setChatUserList}
            setChatList={setChatList}
          />
        ) : null}
        {openDetailChat ? (
          <DetailChat
            setOpenDetailChat={setOpenDetailChat}
            selectedUser={selectedUser}
          />
        ) : null}
        <div className="chat">쪽지</div>
        <img className="chatImage" src="img/chat.png" />
        <div className="chatExplain">
          <strong>쪽지하기</strong> 통화가 즐거우셨나요? 친구신청을 통해 친구가
          되었어요! 쪽지를 통해 서로 소통 해보세요!😀
        </div>
        {chatUserList.length === 0 ? (
          <div className="chatZero">
            쪽지가 없어요 :(
            <br /> 7분 통화 후 마음에 드는 친구에게 친구신청을 해보세요!
          </div>
        ) : (
          chatUserList.map((el, idx) => {
            return (
              <button
                className="chatUser"
                onClick={() => {
                  setSelectedUser(el);
                  setOpenDetailChat(true);
                }}
              >
                <img className="chatUserImage" src="img/user.png" />
                <div vertical-align="true" display="block">
                  <div className="chatUserName">{el}</div>
                  <div className="chatUserChat">{chatList[idx]}</div>
                </div>
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Chatting;
