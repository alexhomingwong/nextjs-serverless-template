"use client";
import styles from "./nav.module.css";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";

interface Props {
  session: any;
}

export const Nav = ({ session }: Props) => {
  const { email } = session?.user || {};

  return (
    <nav className={styles.nav}>
      <Image
        className={styles.logo}
        src="/static/ar-sq.png"
        alt="AR Squared Logo"
        width={63.75}
        height={35}
        priority
      />
      <div>
        {email ? (
          <>
            <span>{email}</span>
            <button onClick={() => signOut()}>log out</button>
          </>
        ) : (
          <button onClick={() => signIn("cognito")}>Sign in</button>
        )}
      </div>
    </nav>
  );
};
