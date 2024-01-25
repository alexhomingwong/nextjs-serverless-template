"use client";

import { signIn, signOut } from "next-auth/react";

interface Props {
  email?: string;
}

export const NavControl = ({ email }: Props) => {
  return email ? (
    <>
      <span>{email}</span>
      <button onClick={() => signOut()}>log out</button>
    </>
  ) : (
    <button onClick={() => signIn("cognito")}>Sign in</button>
  );
};
