"use client";

import { fetchUserAttributes, getCurrentUser } from "aws-amplify/auth";
import { useEffect, useState } from "react";

interface User {
  id: string;
  email: string;
  emailVerified: boolean;
}

const getAuthData = async () => {
  return await fetchUserAttributes();
};

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getAuthData()
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
  }, []);

  return user;
};
