"use client";

import { createContext, useEffect, useState } from "react";
import { Hub } from "aws-amplify/utils";
import { fetchUserAttributes } from "aws-amplify/auth";

interface User {
  id: string;
  email: string;
  emailVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {},
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const [user, setUser] = useState<User | null>(null);

  const assignCurrentUser = () => {
    fetchUserAttributes()
      .then((user) => {
        const { sub, email, email_verified } = user;
        if (sub && email) {
          setUser({
            id: sub,
            email,
            emailVerified: email_verified === "true",
          });
        }
      })
      .catch(() => {
        setUser(null);
      });
  };

  Hub.listen("auth", ({ payload }) => {
    switch (payload.event) {
      case "signedIn":
        assignCurrentUser();
        break;
      case "signedOut":
        setUser(null);
        break;
    }
  });

  useEffect(() => {
    assignCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser: (usr) => setUser(usr) }}>
      {children}
    </AuthContext.Provider>
  );
}
