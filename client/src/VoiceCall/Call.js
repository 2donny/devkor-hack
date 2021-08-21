import React from "react";
import AgoraRTC from "agora-rtc-sdk";
import { useEffect, useState } from "react";
// import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import WaitingModal from "./WaitingModal";
import "./Call.css";

const Call = () => {
  const [waiting, setWaiting] = useState(false);
  // const [globalStream, setGlobalStream] = useState("");
  // const [globalStreamId, setGlobalStreamID] = useState("");
  // const [globalClient, setGlobalClient] = useState("");

  // Remove the video stream from the container.
  function removeVideoStream(elementId) {
    let remoteDiv = document.getElementById(elementId);
    if (remoteDiv) remoteDiv.parentNode.removeChild(remoteDiv);
  }

  let client = AgoraRTC.createClient({
    mode: "rtc",
    codec: "vp8",
  });

  useEffect(() => {
    // Handle errors.
    let handleError = function (err) {
      console.log("Error: ", err);
    };

    // Query the container to which the remote stream belong.
    let remoteContainer = document.getElementById("remote-container");

    // Add video streams to the container.
    function addVideoStream(elementId) {
      // Creates a new div for every stream
      let streamDiv = document.createElement("div");
      // Assigns the elementId to the div.
      streamDiv.id = elementId;
      // Takes care of the lateral inversion
      streamDiv.style.transform = "rotateY(180deg)";
      // Adds the div to the container.
      remoteContainer.appendChild(streamDiv);
    }

    // setGlobalClient(client);

    client.init(
      "bbd67ddcf9e4466282c7b03bd49e3d87",
      function () {
        console.log("client initialized");
      },
      function (err) {
        console.log("client init failed ", err);
      }
    );

    // Join a channel
    client.join(
      null, //token
      "123", //channel name
      null,
      (uid) => {
        // Create a local stream
        let localStream = AgoraRTC.createStream({
          audio: true,
          video: true,
        });
        // Initialize the local stream
        localStream.init(() => {
          // Play the local stream
          localStream.play("me");
          // Publish the local stream
          client.publish(localStream, handleError);
        }, handleError);
      },
      handleError
    );

    // Subscribe to the remote stream when it is published
    client.on("stream-added", function (evt) {
      client.subscribe(evt.stream, handleError);

      // 상대방이 대화에 참여했으므로 대기화면 종료
      setWaiting(false);
    });
    // Play the remote stream when it is subsribed
    client.on("stream-subscribed", function (evt) {
      let stream = evt.stream;
      // setGlobalStream(stream);
      let streamId = String(stream.getId());
      // setGlobalStreamID(streamId);
      addVideoStream(streamId);
      stream.play(streamId);
    });

    // Remove the corresponding view when a remote user unpublishes.
    client.on("stream-removed", function (evt) {
      let stream = evt.stream;
      let streamId = String(stream.getId());
      stream.close();
      removeVideoStream(streamId);
    });
    // Remove the corresponding view when a remote user leaves the channel.
    client.on("peer-leave", function (evt) {
      let stream = evt.stream;
      let streamId = String(stream.getId());
      stream.close();
      removeVideoStream(streamId);
    });
  }, []);

  //Swift
  // const leaveChannel = () => {
  //   agoraKit.leaveChannel(nil);
  // };

  const onExit = () => {
    client.leave();
  };

  return (
    <div className="callBackground">
      {waiting && <WaitingModal />}
      <div className="callContainer">
        <div className="callHeader" />
        <img className="callImage" src="img/download.jpg" />
        {/* <button className="callBack">
            <AiOutlineArrowLeft size="15" color="white" />
          </button> */}
        <div className="callName">양오오니</div>
        <button className="callExit" onClick={onExit}>
          <IoCall className="callExitIcon" color="white" size="22" />
        </button>
        <div className="callJob">UX UI 디자이너</div>
        <div className="callTime">7:00</div>
        <div className="callFooter">
          <div className="callContent">
            재밌는 일 뭐 없나 코시국에 새로운 사람들 다양한 분야 의 사람들과
            TALK 을 해보고싶어서 가입했습니다. 지금 스타트업을 다니고 있어서
            관련 업종에 계신 분들과 재밌는 이야기 나눠보고 싶습니다 ㅎㅎ
          </div>
          <div className="callGoalTitle">목표/버킷리스트</div>
          <div className="callGoalContent">목표는 집가기</div>
          <div className="callDetailTitle">Detail</div>
          <div className="callDetailContent">내 MBTI 뭐겡</div>
          <div className="callResumeTitle">활동이력:</div>
          <div className="callResumeContent">멋쟁이 사자처럼</div>
          <div className="callInterestTitle">관심사</div>
          <div className="callInterestContent">#맛집</div>
        </div>
        <h4>Local video</h4>
        <div id="me"></div>
        <h4>Remote video</h4>
        <div id="remote-container"></div>
      </div>
    </div>
  );
};

export default Call;
