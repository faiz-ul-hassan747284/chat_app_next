import { messageData } from "@/lib/types";
import style from "./MessageComponent.module.css";

function Message({ data }: { data: messageData }) {
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <div className={style.message}>
      <p className={style.author} style={{ color: getRandomColor() }}>
        ~{data.user}
      </p>
      <p>{data.message}</p>
    </div>
  );
}

export default Message;
