import {useState, useContext, KeyboardEvent } from "react";
import { useRouter } from 'next/router';
import { BsFillSendFill } from "react-icons/bs";

import style from './MessageForm.module.css'
import { UserContext } from "@/context/UserContext";

function MessageForm() {
  const [message, setMessage] = useState("");
  const router = useRouter();
  const {userName} = useContext(UserContext)
  function setChannel(){
    const {channel} = router.query
    return channel ??'global'
  }
  function sendMessage() {
    fetch(`/api/messages`, {
      method: "POST",
      body: JSON.stringify({
        message,
        user: userName,
        channel: setChannel(),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setMessage("");
      })
      .catch((err) => console.log(err.message));
  }

  function handleMessageChange(e: React.ChangeEvent<HTMLInputElement>) {
    setMessage(e.target.value);
  }

  function handleMessageKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && message.trim()) {
      sendMessage();
    }
  }
  return ( <div className={style.message_form}>
    <input
      className={style.message_input}
      type="text"
      placeholder="Message..."
      value={message}
      onChange={handleMessageChange}
      onKeyDown={handleMessageKeyDown}
    />
    <button
      className={style.message_input_button}
      onClick={sendMessage}
      disabled={!message.trim()}
    >
      <BsFillSendFill />
    </button>
  </div> );
}

export default MessageForm;