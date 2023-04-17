import style from "./ChatBox.module.css";
function ChatBox({messages}) {
  return (
    <div className={style.chat_box_wrapper}>
      <div className={style.chat_box}>{JSON.stringify(messages)}</div>
    </div>
  );
}

export default ChatBox;