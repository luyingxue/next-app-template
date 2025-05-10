import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { SupabaseAdapter } from "@auth/supabase-adapter"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
  }),
  callbacks: {
    async session({ session, user }) {
      // 将 role 字段注入 session
      if (session.user && user) {
        session.user.role = user.role
      }
      return session
    }
  },
  // 添加信任的主机名配置
  trustHost: true
})