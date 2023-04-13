import style from "./Landing.module.css";
function Landing() {
  return (
    <div className={style.landing_div}>
      <div className={style.landing_div_inner}>
        <h1 className={style.landing_div_heading}>This is a Chat App</h1>
        <hr />
        <p className={style.landing_div_paragraph}>
          Looking for a better way to stay connected with friends and family?
          Try our new chat app! With our app, you can easily send messages, make
          voice and video calls, share photos and videos, and much more.
        </p>
      </div>
    </div>
  );
}

export default Landing;
