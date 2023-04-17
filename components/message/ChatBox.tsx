import { messagesData } from "@/lib/types";
import style from "./ChatBox.module.css";

import Message from "./Message";

function ChatBox({ messages }: { messages: messagesData }) {
  return (
    <div className={style.chat_box_wrapper}>
      <div className={style.chat_box}>
        {messages.message.map((message, i) => (
          <Message key={i} data={message}/>
        ))}
      </div>
    </div>
  );
}

export default ChatBox;
