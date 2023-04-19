import { messageData } from "@/lib/types";
import style from "./MessageComponent.module.css";

function Message({ data, colorObj }: { data: messageData, colorObj: {[key: string]: string} }) {
  function getUserColor(user: string) {
    return user in colorObj ? colorObj[user] : `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return (
    <div className={style.message}>
      <p className={style.author} style={{ color: getUserColor(data.user) }}>
        ~{data.user}
      </p>
      <p>{data.message}</p>
    </div>
  );
}

export default Message;
