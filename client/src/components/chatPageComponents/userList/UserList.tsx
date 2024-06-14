import React from "react";
import "./userList.scss";
import { useNavigate } from "react-router-dom";
import { UserApi } from "../../../webServices/user";

// import Users from "../../../data/Users.json";
import { ChatApi } from "../../../webServices/chat";

export default function (props) {
  const [users, setUsers] = React.useState([]);
  const [searchText, setSearchText] = React.useState("");
  const [showSearchBox, setShowSearchBox] = React.useState(false);

  // getting a navigator from react router
  const reactNavigator = useNavigate();

  async function fetchUserList() {
    const userList = await UserApi.userList();
    console.log("userList props ", userList);
    if (userList.status) {
      setUsers(userList.data);
    }
  }
  const userListSearch = async (searchString) => {
    const userListSearch = await UserApi.userListSearch(searchString);
    if (userListSearch.status) {
      setUsers(userListSearch.data);
    }
  };
  React.useEffect(() => {
    fetchUserList();
  }, []);

  React.useEffect(() => {
    userListSearch(searchText);
  }, [searchText]);

  function initiateChat() {
    let chatObj = {
      user_socket_event: "CHAT_SUBHO",
      friend_socket_event: "CHAT_BIPLAW",
    };
    ChatApi.initiateChat(chatObj);
  }
  return (
    <div className="user-list-container">
      <h4>
        {showSearchBox && (
          <input
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
        )}
        {!showSearchBox &&
          (props.parent == "VideoCall" ? "Connect call with" : "Messages (4)")}
        <span>
          {!showSearchBox ? (
            <img
              src="/search.svg"
              alt=""
              onClick={() => setShowSearchBox(!showSearchBox)}
            />
          ) : (
            <img
              src="/delete-button.png"
              alt=""
              width="20px"
              onClick={() => {
                setShowSearchBox(!showSearchBox);
                setSearchText("");
              }}
            />
          )}
          {props.parent != "VideoCall" && !showSearchBox && (
            <img src="/home.svg" alt="" onClick={() => reactNavigator("/")} />
          )}
          {props.parent != "VideoCall" && !showSearchBox && (
            <img src="/profile.svg" alt="" />
          )}
        </span>
      </h4>
      {/* Individual chat */}
      {users.map((user, index) => {
        return (
          <div className="user-chat" key={index} onClick={initiateChat}>
            <h5>{user.user_name}</h5>
            <span>
              {/* profile image */}
              <img src={user.user_profile_img} alt="" />
              {/* recent messages */}
              <p>{user.bio || "I am a Software Engineer"}</p>
            </span>
            <p>11:30</p>
          </div>
        );
      })}
    </div>
  );
}
