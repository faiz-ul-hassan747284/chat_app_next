
import Navbar from "../components/shared/Navbar";

import style from './Landing.module.css'
export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className={style.landing_div}>
      <div className={style.landing_div_inner}>
        <h1 className={style.landing_div_heading}>This is a Chat App</h1>
        </div>
        <hr/>
        Looking for a better way to stay connected with friends and family? Try our new chat app! With our app, you can easily send messages, make voice and video calls, share photos and videos, and much more.
      </div>
    </main>
  )
}
