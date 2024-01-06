import { messagesData } from "@/lib/types";
import style from "./ChatBox.module.css";
import Message from "./MessageComponent";
import MessageForm from "./MessageForm";
import { useEffect, useRef } from "react";
interface Props {
  messages: messagesData,
  colorObj: {}
}

function ChatBox({ messages, colorObj }: Props) {
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={style.chat_box_wrapper}>
      <div ref={divRef} className={style.chat_box}>
        {messages.message.map((message, i) => (
          <Message key={i} data={message} colorObj={colorObj} />
        ))}
      </div>
      <MessageForm/>
    </div>
  );
}

export default ChatBox;
