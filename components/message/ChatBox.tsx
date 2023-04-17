import { messageData } from "@/lib/types";
import style from "./ChatBox.module.css";

function ChatBox({ messages }: { messages: messageData }) {
  return<div className={style.chat_box_wrapper}>
      <div className={style.chat_box}>
      {messages.message.map((message, i) =>
    <p key={i} >{message.message}</p>
  )}
      </div>
    </div>

}

export default ChatBox;
