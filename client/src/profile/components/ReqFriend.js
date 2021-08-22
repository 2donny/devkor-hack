import React from 'react';
import '../MyPage.css'

const ReqFriend = ({reqFriend, removeReqFriend}) => {
    return (
        <div className = "reqfriend">                   
            
            <div className = "reqname">
                {reqFriend.name}
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
    );
};

export default ReqFriend;

            