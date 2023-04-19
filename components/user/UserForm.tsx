import { useState, useContext, KeyboardEvent } from "react";
import { useRouter } from 'next/router'

import style from "./UserForm.module.css";
import { UserContext } from "@/context/UserContext";

function UserForm() {
  const [name, setName] = useState("");
  const { setUserName } = useContext(UserContext);
  const router = useRouter()
  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleNameKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && name.trim()) {
      setUserName(name)
      router.back()
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
