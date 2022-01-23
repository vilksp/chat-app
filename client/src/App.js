import "./App.css";
import io from "socket.io-client";
import React, { useState } from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function App() {
	const [username, setUsername] = useState("");
	const [room, setRoom] = useState("");

	const joinRoom = () => {
		if (username !== "" && room !== "") {
			socket.emit("join_room", room);
		}
	};
	return (
		<div className="App">
			<h3>Join a chat</h3>
			<input
				type="text"
				placeholder="Type your name..."
				onChange={(e) => {
					setUsername(e.target.value);
				}}
			/>
			<h3>Join a room</h3>
			<input
				type="text"
				placeholder="Type a room name to join"
				onChange={(e) => {
					setRoom(e.target.value);
				}}
			/>
			<button onClick={joinRoom}>Join a room</button>
			<Chat socket={socket} username={username} room={room} />
		</div>
	);
}

export default App;
