import React from 'react';
import AgoraRTC from 'agora-rtc-sdk';
import { useEffect, useState } from 'react';
// import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoCall } from 'react-icons/io5';
import WaitingModal from './WaitingModal';
import './CallWaitingRoom.css';

const client = AgoraRTC.createClient({
  mode: 'rtc',
  codec: 'vp8',
});

const localStream = AgoraRTC.createStream({
  audio: true,
  video: false,
});

const CallWaitingRoom = () => {
  const [waiting, setWaiting] = useState(true);
  const [finish, setFinish] = useState(false);

  // Remove the video stream from the container.
  function removeVideoStream(elementId: string) {
    let remoteDiv = document.getElementById(elementId);
    if (remoteDiv) remoteDiv?.parentNode?.removeChild(remoteDiv);
  }

  useEffect(() => {
    // Handle errors.
    let handleError = function (
      err:
        | {
            type: 'warning' | 'error';
            msg: string;
            info?: string | undefined;
          }
        | string,
    ) {
      console.log('Error: ', err);
    };

    // Query the container to which the remote stream belong.
    let remoteContainer = document.getElementById('remote-container');

    // Add video streams to the container.
    function addVideoStream(elementId: string) {
      // Creates a new div for every stream
      let streamDiv = document.createElement('div');
      // Assigns the elementId to the div.
      streamDiv.id = elementId;
      // Takes care of the lateral inversion
      streamDiv.style.transform = 'rotateY(180deg)';
      // Adds the div to the container.
      remoteContainer?.appendChild(streamDiv);
    }

    // setGlobalClient(client);

    client.init(
      'bbd67ddcf9e4466282c7b03bd49e3d87',
      function () {
        console.log('client initialized');
      },
      function (err) {
        console.log('client init failed ', err);
      },
    );

    // Join a channel
    client.join(
      null, //token
      '123', //channel name
      null,
      undefined,
      (uid: number) => {
        localStream.init(() => {
          // Play the local stream
          localStream.play('me');
          // Publish the local stream
          client.publish(localStream, handleError);
        }, handleError);
      },
      handleError,
    );

    // Subscribe to the remote stream when it is published
    client.on('stream-added', function (evt) {
      client.subscribe(evt.stream, undefined);

      // 상대방이 대화에 참여했으므로 대기화면 종료
      setWaiting(false);
    });
    // Play the remote stream when it is subsribed
    client.on('stream-subscribed', function (evt) {
      let stream = evt.stream;
      // setGlobalStream(stream);
      let streamId = String(stream.getId());
      // setGlobalStreamID(streamId);
      addVideoStream(streamId);
      stream.play(streamId);
    });

    // Remove the corresponding view when a remote user unpublishes.
    client.on('stream-removed', function (evt) {
      let stream = evt.stream;
      let streamId = String(stream.getId());
      stream.close();
      removeVideoStream(streamId);
      setWaiting(true);
    });
    
  }, []);

  const onExit = async () => {
    await client.leave();
    client.unpublish(localStream);
    setWaiting(true);
  };

  return (
    <div className="callBackground">
      {waiting && <WaitingModal />}
      <div className="callContainer">
        <div className="callHeader" />
        <img
          className="callImage"
          src="https://raw.githubusercontent.com/2donny/devkor-ykring/kyung/client/public/img/download.jpg"
        />
        {/* <button className="callBack">
            <AiOutlineArrowLeft size="15" color="white" />
          </button> */}
        <div className="callName">양오오니</div>

        <div className="callJob">UX UI 디자이너</div>
        {finish ? (
          <button className="callNew">다른 친구와 통화하기</button>
        ) : (
          <div className="callTime">7:00</div>
        )}
        {finish ? (
          <button className="callFriend">친구신청</button>
        ) : (
          <button className="callExit" onClick={onExit}>
            <IoCall className="callExitIcon" color="white" size="26" />
          </button>
        )}

        <div className="callFooter">
          <div className="callFooterContainer">
            <div className="callIntro">
              재밌는 일 뭐 없나 코시국에 새로운 사람들 다양한 분야 의 사람들과
              TALK 을 해보고싶어서 가입했습니다. 지금 스타트업을 다니고 있어서
              관련 업종에 계신 분들과 재밌는 이야기 나눠보고 싶습니다 ㅎㅎ
            </div>
            <div className="callTitle">목표/버킷리스트</div>
            <div className="callContent">
              1. 세계일주하고 맛있는 세계음식들 음미해보기!!!!!
              <br />
              2. 하루에 신문 1개씩 읽고 , 일기 하루에 한개씩 써서 책으로
              만들어서 자서전 팔기
              <br />
              3. 영어공부/학원 다니기
              <br /> 4. 학점 A쁠 받기
            </div>
            <div className="callTitle">Detail</div>
            <div className="callDetailTitles">
              <div>성별:</div>
              <div>나이:</div>
              <div>학교</div>
              <div>MBTI:</div>
              <div>위치:</div>
              <div>활동이력:</div>
            </div>
            <div className="callDetailContents">
              <div>여자</div>
              <div>20대 초반</div>
              <div>고려대학교</div>
              <div>ENTP 뜨거운 논쟁의 변론가</div>
              <div>서울 성동구</div>
              <div>멋쟁이 사자처럼</div>
            </div>
            <div className="callTitle">관심사</div>
            <div className="callContent" id="last">
              #맛집
            </div>
          </div>
        </div>
        <div id="me"></div>
        <div id="remote-container"></div>
      </div>
    </div>
  );
};

export default CallWaitingRoom;
