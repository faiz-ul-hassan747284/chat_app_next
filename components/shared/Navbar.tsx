import Link from "next/link";
import { Montserrat } from "next/font/google";
import styles from "./Navbar.module.css";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

function Navbar() {
  const { setUserName, userName } = useContext(UserContext);
  return (
    <div className={`${montserrat.className} ${styles.navbar}`}>
      <div className={styles.navbar_flex}>
        <div>
          <Link className={styles.navbar_text} href='/'>  Community Talk </Link>
          <Link className={styles.navbar_text} href='/message'>  Start Message </Link>
        </div>

        {/* {userName === '' ? (
          <Link className={styles.navbar_text} href='/message'>  Log-in </Link>
        ) : (
          <Link href='/' onClick={() => setUserName('')} className={styles.navbar_text} >  Log-Out </Link>
        )} */}

      </div>
    </div>
  );
}

export default Navbar;
