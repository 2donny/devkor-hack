import React, {useState, useEffect} from 'react';
import './MyPage.css';
import ReqFriend from './components/ReqFriend';

function MyPage() {

    const [reqFriend, setReqFriend] = useState ([
        {name: "잔나비"}
    ]);

    const removeReqFriend = (id) => {
        setReqFriend(reqFriend.filter(reqFriends => {
          return reqFriends.id !== id;
        }));
      };

    const addFriend = (reqFriends) => {
        setReqFriend([
            ...reqFriend,
            reqFriends
        ])
    };

    const renderReqFriend = reqFriend.map(reqFriends => {
        return(
          <ReqFriend
           reqFriends = {reqFriends} 
           key={reqFriends.id}
           removeReqFriend={removeReqFriend}
           />
        );
      });

    return(
      <div>
            <h1 className = "title">마이 페이지</h1>
            <div className = "text1">
                <div className = "textintext">   
                    친구수락 친구요청이 왔어요 친구 수락을 하시면 쪽지탭에서 쪽지를 진행하실 수 있어요! 쪽지를 통해 더 친해져 볼까요?
                </div>
            </div>
            <div className = "smalltitle1">친구신청</div>
            <div className = "reqfriend">                   
            <div className = "reqimg"></div>
            <div className = "reqname">
                잔나비
            </div>
            <button className = "reqaccept">
                수락
            </button>
            <button 
                onClick={()=>removeReqFriend(reqFriend.id)}
                className = "reqreject">
                거절
            </button>
        </div>
        <div className = "reqfriend3">                   
            <div className = "reqimg3"></div>
            <div className = "reqname">
                잔나비
            </div>
            <button className = "reqaccept">
                수락
            </button>
            <button 
                onClick={()=>removeReqFriend(reqFriend.id)}
                className = "reqreject">
                거절
            </button>
        </div>
            <div className = "smalltitle2">나의 친구</div>
            <div className = "reqfriend2">                   
                <div  className = "reqimg2">

                </div>
                <div className = "reqname">
                    준호
                </div>
                <button className = "message">
                    쪽지하기
                </button>
            </div>
      </div>
  )  
}
/*<div className = "text2">친구신청이 없어요 :( <br/> 7분 통화 후 마음에 드는 친구에게 친구신청을 해보세요!</div>
          */ //친구신청한 친구없으면 이거 쓰면됨
export default MyPage