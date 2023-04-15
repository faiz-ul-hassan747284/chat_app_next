import Link from 'next/link'

import style from "./ChatDemo.module.css";

function ChatDemo() {
  return (
    <div className={style.chat_room_div}>
      <div className={style.typing_animation}>
        <span className={style.text}>Hey! How are you?</span>
        <span className={style.cursor}></span>
      </div>
      <br/>
      <Link  href="/message"><p className={style.button}>Start now!</p></Link>
    </div>
  );
}

export default ChatDemo;
