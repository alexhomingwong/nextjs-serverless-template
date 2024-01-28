"use client";

import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext<null | Session>(null);

export default function Provider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [session, setSession] = useState<null | Session>(null);

  useEffect(() => {
    getSession().then((currentSession: any) => {
      setSession(currentSession);
    });
  }, []);

  return (
    <AuthContext.Provider value={session}>{children}</AuthContext.Provider>
  );
}
