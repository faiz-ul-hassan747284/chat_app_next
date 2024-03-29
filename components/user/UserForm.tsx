import { useState, useContext, KeyboardEvent } from "react";
import { useRouter } from 'next/router'

import style from "./UserForm.module.css";
import { UserContext } from "@/context/UserContext";

function UserForm() {
  const [name, setName] = useState("");
  const { setUserName } = useContext(UserContext);
  const router = useRouter()
  function sendUser() {
    fetch(`/api/users`, {
      method: "POST",
      body: JSON.stringify({
        name: name,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(() => {
        setUserName(name)
      router.push('/')
      })
      .catch((err) => console.log(err.message));
  }
  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleNameKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && name.trim()) {
      sendUser()
    }}
  return (
    <div className={style.user_form_wrapper}>
      <h1 className={style.name_label}>
        Enter User Name
      </h1>
      <div className={style.user_form}>
        <input
          placeholder="Awesome Name..."
          className={style.name_input}
          value={name}
          onChange={handleNameChange}
          onKeyDown={handleNameKeyDown}
        />
      </div>

    </div>
  );
}

export default UserForm;
