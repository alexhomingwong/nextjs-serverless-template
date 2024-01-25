import styles from "./nav.module.css";
import Image from "next/image";
import logo from "../public/static/arsq.png";
import { NavControl } from "./navControl";

interface Props {
  session: any;
}

export const Nav = ({ session }: Props) => {
  const { email } = session?.user || {};

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
        <NavControl email={email} />
      </div>
    </nav>
  );
};
