import React from "react";

function Chat({ socket, username, room }) {
	return (
		<div>
			<div className="chat-header">
				<p>Live chat</p>
			</div>
			<div className="chat-body"></div>
			<div className="chat-footer">
				<input input="text" placeholder="Hey..." />
				<button>&#9658;</button>
			</div>
		</div>
	);
}

export default Chat;
