import { messageData } from "@/lib/types";
import style from "./ChatBox.module.css";
function ChatBox({messages }: {messages:messageData}) {
  return (
    <div className={style.chat_box_wrapper}>
      <div className={style.chat_box}>{JSON.stringify(messages)}</div>
    </div>
  );
}

export default ChatBox;