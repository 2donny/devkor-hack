import React from 'react';
import AgoraRTC from 'agora-rtc-sdk';
import { useEffect, useState } from 'react';
// import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoCall } from 'react-icons/io5';
import WaitingModal from './WaitingModal';
import './CallWaitingRoom.css';
import { useHistory } from 'react-router-dom';

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
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(10);
  const [curSec, setCurSec] = useState(0);
  const totalSec = 60 * minutes + seconds;
  // console.log("secsec", totalSec);
  let style = { filter: `blur(${60 * minutes + seconds}px)` };

  const history = useHistory();

  useEffect(() => {
    if (waiting === false) {
      const countdown = setInterval(async () => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
          setCurSec(curSec + 1);
          // console.log("secsec1", curSec);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(countdown);
            setFinish(true);
            await client.leave();
            client.unpublish(localStream);
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => {
        clearInterval(countdown);
      };
    }
  }, [waiting, minutes, seconds]);

  useEffect(() => {
    // Handle errors.
    let handleError = function (err: any) {
      console.log('Error: ', err);
    };

    // Remove the video stream from the container.
    function removeVideoStream(elementId: any) {
      let remoteDiv = document.getElementById(elementId);
      if (remoteDiv) remoteDiv?.parentNode?.removeChild(remoteDiv);
    }

    // Query the container to which the remote stream belong.
    let remoteContainer = document.getElementById('remote-container');

    // Add video streams to the container.
    function addVideoStream(elementId: any) {
      // console.log("kyung", "addVideoStream");
      // Creates a new div for every stream
      let streamDiv = document.createElement('div');
      // Assigns the elementId to the div.
      streamDiv.id = elementId;
      // Takes care of the lateral inversion
      streamDiv.style.transform = 'rotateY(180deg)';
      // Adds the div to the container.
      remoteContainer?.appendChild?.(streamDiv);
    }

    // setGlobalClient(client);

    client.init(
      'f00954bc33414730a06ed11c8aa4c139',
      function () {
        console.log('kyung', 'client initialized');
      },
      function (err) {
        console.log('kyung', 'client init failed ', err);
      },
    );

    // Join a channel
    client.join(
      null, //token
      '123', //channel name
      null,
      undefined,
      (uid: any) => {
        // console.log("kyung", "join");
        // Initialize the local stream
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
      console.log('kyung', 'stream-added');
      client.subscribe(evt.stream);
      // ???????????? ????????? ?????????????????? ???????????? ??????
      setWaiting(false);
    });

    // Play the remote stream when it is subsribed
    client.on('stream-subscribed', function (evt) {
      // console.log("kyung", "stream-subscribed");
      let stream = evt.stream;
      // setGlobalStream(stream);
      let streamId = String(stream.getId());
      // setGlobalStreamID(streamId);
      addVideoStream(streamId);
      stream.play(streamId);
    });

    // Remove the corresponding view when a remote user unpublishes.
    client.on('stream-removed', function (evt) {
      // console.log("kyung", "stream-removed");
      let stream = evt.stream;
      let streamId = String(stream.getId());
      stream.close();
      removeVideoStream(streamId);
      setWaiting(true);
    });
    // Remove the corresponding view when a remote user leaves the channel.
    client.on('peer-leave', function (evt) {
      // console.log("kyung", "peer-leave");
      client.unpublish(localStream);
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
        <div className="callBlur">
          <div className="callHeader" />
          <img
            className="callImage"
            src="https://raw.githubusercontent.com/2donny/devkor-ykring/kyung/client/public/img/download.jpg"
            style={style}
          />
        </div>
        {/* <button className="callBack">
          <AiOutlineArrowLeft size="15" color="white" />
        </button> */}
        <div className="callName">????????????</div>

        <div className="callJob">UX UI ????????????</div>
        {finish ? (
          <button onClick={() => history.push('/call')} className="callNew">
            ?????? ????????? ????????????
          </button>
        ) : (
          <div className="callTime">
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
          </div>
        )}
        {finish ? (
          <button className="callFriend">????????????</button>
        ) : (
          <button className="callExit" onClick={onExit}>
            <IoCall className="callExitIcon" color="white" size="26" />
          </button>
        )}

        <div className="callFooter">
          <div className="callFooterContainer">
            <div className="callIntro">
              ????????? ??? ??? ?????? ???????????? ????????? ????????? ????????? ?????? ??? ????????????
              TALK ??? ?????????????????? ??????????????????. ?????? ??????????????? ????????? ?????????
              ?????? ????????? ?????? ????????? ????????? ????????? ???????????? ???????????? ??????
            </div>
            <div className="callTitle">??????/???????????????</div>
            {totalSec < 4 * curSec ? (
              <div className="callContent">
                1. ?????????????????? ????????? ??????????????? ???????????????!!!!!
                <br />
                2. ????????? ?????? 1?????? ?????? , ?????? ????????? ????????? ?????? ?????????
                ???????????? ????????? ??????
                <br />
                3. ????????????/?????? ?????????
                <br /> 4. ?????? A??? ??????
              </div>
            ) : (
              <div>
                <br />
                <br />
              </div>
            )}

            <div className="callTitle">Detail</div>
            {totalSec < 2 * curSec ? (
              <>
                <div className="callDetailTitles">
                  <div>??????:</div>
                  <div>??????:</div>
                  <div>??????</div>
                  <div>MBTI:</div>
                  <div>??????:</div>
                  <div>????????????:</div>
                </div>
                <div className="callDetailContents">
                  <div>??????</div>
                  <div>20??? ??????</div>
                  <div>???????????????</div>
                  <div>ENTP ????????? ????????? ?????????</div>
                  <div>?????? ?????????</div>
                  <div>????????? ????????????</div>
                </div>
              </>
            ) : (
              <div>
                <br />
                <br />
              </div>
            )}

            <div className="callTitle">?????????</div>
            {4 * totalSec < 3 * curSec ? (
              <div className="callContent" id="last">
                #??????
              </div>
            ) : (
              <div>
                <br />
                <br />
              </div>
            )}
          </div>
        </div>
        <div id="me"></div>
        <div id="remote-container"></div>
      </div>
    </div>
  );
};

export default CallWaitingRoom;
