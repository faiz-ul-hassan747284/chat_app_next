import { useContext } from "react";
import { messageData } from "@/lib/types";
import style from "./MessageComponent.module.css";
import { UserContext } from "@/context/UserContext";
function Message({ data, colorObj }: { data: messageData, colorObj: {[key: string]: string} }) {
  const created_at = new Date(data.created_at)
  const {userName} = useContext(UserContext)
  function getUserColor(user: string) {
    return user in colorObj ? colorObj[user] : `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  return (
    <div className={userName===data.user?style.self_message: style.message}>
      <div className={style.info}>
      <p className={style.time}>{created_at.toLocaleString('en-PK')}</p>
      <p className={style.author} style={{ color: getUserColor(data.user) }}>
        ~{data.user}
      </p>
      </div>
      <p>{data.message}</p>
    </div>
  );
}

export default Message;
