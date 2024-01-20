import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const handler = NextAuth({
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
    // ...add more providers here
  ],
});

export { handler as GET, handler as POST };
