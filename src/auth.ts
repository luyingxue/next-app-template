import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { SupabaseAdapter } from "@auth/supabase-adapter";

// 扩展 Session 类型
declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    }
  }
}

// 扩展 User 类型
declare module "next-auth" {
  interface User {
    id: string;
    role?: string;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL as string,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY as string,
  }),
  callbacks: {
    async session({ session, user }) {
      // 将 role 和 id 字段注入 session
      if (session.user && user) {
        session.user.role = user.role;
        session.user.id = user.id;
      }

      return session;
    },
  },
  // 添加信任的主机名配置
  trustHost: true,
});
