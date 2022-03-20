import React, { useState } from "react";
import { v4 as uuidV4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const createNewroom = (event) => {
    event.preventDefault();
    const id = uuidV4();
    setRoomId(id);
    toast.success("Created new room");
  };

  const joinRoom = () => {
    if (!roomId || !username)
      return toast.error("RoomId and Username is required");

    navigate(`/editor/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const handleInputEnter = (event) => {
    if (event.code === "Enter") joinRoom();
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img
          src="/code-share.png"
          alt="code-share-logo"
          className="homepageLogo"
        />
        <h4 className="mainLable">Paste invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;
            <a href="/" className="createNewBtn" onClick={createNewroom}>
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          Built with 💛 by{" "}
          <a href="https://github.com/kartikkpawar">Kartik Pawar</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
