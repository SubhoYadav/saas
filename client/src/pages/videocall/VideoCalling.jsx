import React from "react";
import "./videoCalling.scss";
import { getDatabase, ref, set, child, get } from "firebase/database";
import UserList from "../../components/chatPageComponents/userList/UserList";

export default function VideoCalling() {
  const writeDataToFireBase = (userId, name, email, imageUrl) => {
    try {
      const db = getDatabase();
      console.log("Database ", db);
      set(ref(db, "users/" + userId), {
        username: name,
        email: email,
        profile_picture: imageUrl,
      });
      console.log("Hey!!");
    } catch (err) {
      console.log(err.message);
    }
  };
  function readFirebaseData() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/123`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function getLocalVideo() {
    const mediaConstraints = {
      audio: true, // We want an audio track
      video: true, // And we want a video track
    };
    console.log(localVideo);
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then((localStream) => {
        localVideo.current.srcObj = localStream;
      })
      .catch((error) => {
        console.log("error!!!");
      });
  }
  const [addCall, setAddCall] = React.useState(false);
  const [toggleVideo, setToggleVideo] = React.useState(true);
  const [localVideoStream, setLocalVideoStream] = React.useState(null);
  const localVideo = React.useRef(null);

  React.useEffect(() => {}, []);
  return (
    <div className="videocall-container">
      {/* <div className="videocall-box">
        <button
          onClick={() =>
            writeDataToFireBase(123, "Subho", "sy@gmail.com", "/avatar")
          }
        >
          Write data
        </button>
        <button onClick={readFirebaseData}>Read data</button>
      </div> */}
      <div className="videocall-box">
        <div className="my-video" style={{ height: "90%" }}>
          <div className="img-container">
            <img src="/success.svg" alt="" width="10%" />
          </div>
        </div>
        <div className="button-grp">
          <button onClick={() => setAddCall(!addCall)}>
            <img src="/phone-call.png" alt="" width="50px" />
          </button>
          <button>
            <img src="/mute.png" alt="" width="50px" />
          </button>
          <button>
            <img src="/video.png" alt="" width="50px" />
          </button>
        </div>
      </div>
      <div className="videocall-box">
        {addCall ? (
          <UserList parent={"VideoCall"} />
        ) : (
          <div className="my-video">
            <video src="" autoPlay muted ref={localVideo}></video>
            <div className="img-container">
              <img src="/success.svg" alt="" width="10%" />
            </div>

            <div className="button-grp-local">
              <button>
                <img src="/mute.png" alt="" width="50px" />
              </button>
              <button onClick={getLocalVideo}>
                {toggleVideo ? (
                  <img src="/video-player.png" alt="" width="50px" />
                ) : (
                  <img src="/video.png" alt="" width="50px" />
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Video calling feature
// https://fireship.io/lessons/webrtc-firebase-video-chat/
// https://webrtc.org/getting-started/peer-connections

// Free stun servers
// stun.l.google.com:19302
// stun1.l.google.com:19302
// stun2.l.google.com:19302
// stun3.l.google.com:19302
// stun4.l.google.com:19302

// UI: https://dribbble.com/shots/18384785-AI-powered-video-conference-app
// UI: https://dribbble.com/shots/20390828-Methink-Video-Conference-Dashboard
