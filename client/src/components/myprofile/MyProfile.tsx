import React, { useState, useEffect } from 'react';
import './MyProfile.css';

function MyProfile() {
  const [reqFriend, setReqFriend] = useState([{ name: '잔나비' }]);

  const removeReqFriend = (id: any) => {
    setReqFriend(
      reqFriend.filter((reqFriends: any) => {
        return reqFriends.id !== id;
      }),
    );
  };

  return (
    <div className="container">
      <h1 className="titles">마이 페이지</h1>
      <div className="text1">
        <div className="textintext">
          친구수락 친구요청이 왔어요 친구 수락을 하시면 쪽지탭에서 쪽지를
          진행하실 수 있어요! 쪽지를 통해 더 친해져 볼까요?
        </div>
      </div>
      <div className="smalltitle1">친구신청</div>
      <div className="reqfriend">
        <div className="reqimg"></div>
        <div className="reqname">잔나비</div>
        <button className="reqaccept">수락</button>
        <button className="reqreject">거절</button>
      </div>
      <div className="reqfriend3">
        <div className="reqimg3"></div>
        <div className="reqname">잔나비</div>
        <button className="reqaccept">수락</button>
        <button className="reqreject">거절</button>
      </div>
      <div className="smalltitle2">나의 친구</div>
      <div className="reqfriend2">
        <div className="reqimg2"></div>
        <div className="reqname">준호</div>
        <button className="message">쪽지하기</button>
      </div>
    </div>
  );
}
export default MyProfile;
