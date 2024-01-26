import styles from "./nav.module.css";
import Image from "next/image";
import { NavControl } from "./navControl";

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Image
        className={styles.logo}
        src="/static/arsq.png"
        alt="AR Squared Logo"
        width={63.75}
        height={35}
        unoptimized
      />
      <div>
        <NavControl />
      </div>
    </nav>
  );
};
