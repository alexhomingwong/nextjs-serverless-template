"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { AuthContext } from "@/providers/authProvider";
import { useContext } from "react";
import { redirect } from "next/navigation";

import { useRouter } from "next/navigation";

export const NavControl = () => {
  const session = useContext(AuthContext);

  const router = useRouter();
  const { email } = session?.user || {};

  return email ? (
    <>
      <span>{email}</span>
      <button
        onClick={() => {
          signOut({ callbackUrl: "/api/sso/logout" });
        }}
      >
        log out
      </button>
    </>
  ) : (
    <button onClick={() => signIn("cognito")}>Sign in</button>
  );
};
