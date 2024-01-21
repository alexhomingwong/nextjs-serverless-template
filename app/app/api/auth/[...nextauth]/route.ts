import NextAuth from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

export const handler = NextAuth({
  providers: [
    CognitoProvider({
      clientId: process.env.COGNITO_CLIENT_ID,
      clientSecret: process.env.COGNITO_CLIENT_SECRET,
      issuer: process.env.COGNITO_ISSUER,
    }),
  ],
  callbacks: {
    async jwt(req) {
      const res = { ...req.token };

      if (req.account) {
        res.access_token = req.account.access_token;
      }

      return res;
    },

    async session(req) {
      const { session, token } = req;

      return {
        ...session,
        user: { ...session.user, id: token.sub },
        access_token: token.access_token,
      };
    },
  },
});

export { handler as GET, handler as POST };
