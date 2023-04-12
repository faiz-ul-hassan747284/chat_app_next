import Link from "next/link";
import { Montserrat } from "next/font/google";
import styles from "./Navbar.module.css";

const montserrat = Montserrat({
  weight: "400",
  subsets: ["latin"],
});

function Navbar() {
  return (
    <div className={`${montserrat.className} ${styles.navbar}`}>
      <div className={styles.navbar_flex}>
      <p className={styles.navbar_text} >Chat App</p>
      <Link className={styles.navbar_text} href='https://github.com/faiz-ul-hassan747284'> About me </Link>
      </div>
    </div>
  );
}

export default Navbar;