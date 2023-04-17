import { BsFillSendFill } from "react-icons/bs";

import { messagesData } from "@/lib/types";
import style from "./ChatBox.module.css";

import Message from "./MessageComponent";

function ChatBox({ messages }: { messages: messagesData }) {
  return (
    <div className={style.chat_box_wrapper}>
      <div className={style.chat_box}>
        <div>
          {messages.message.map((message, i) => (
            <Message key={i} data={message} />
          ))}
        </div>
        <div className={style.message_form}>
          <input
            className={style.message_input}
            type="text"
            placeholder="Message..."
          />
          <button className={style.message_input_button}>
            <BsFillSendFill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
