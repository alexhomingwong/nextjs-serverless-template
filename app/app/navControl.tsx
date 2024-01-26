"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export const NavControl = () => {
  const { data: session } = useSession();
  const { email } = session?.user || {};

  return email ? (
    <>
      <span>{email}</span>
      <button onClick={() => signOut()}>log out</button>
    </>
  ) : (
    <button onClick={() => signIn("cognito")}>Sign in</button>
  );
};
