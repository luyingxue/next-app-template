// 导入必要的依赖
import { Button, Avatar } from "@heroui/react";
import { auth, signIn } from "../auth";

// HeaderAuth 组件
export default async function HeaderAuth() {
  // 获取当前用户会话
  const session = await auth();
  // 定义渲染内容
  let authContent: React.ReactNode;

  if (session?.user) {
    // 已登录用户显示头像和退出按钮
    authContent = (
      <div className="flex items-center gap-2">
        {session.user.image && (
          <Avatar
            isBordered
            alt="用户头像"
            size="sm"
            src={session.user.image}
          />
        )}
        <span className="text-sm">{session.user.email}</span>
        <Button as="a" color="secondary" href="/api/auth/signout">
          退出登录
        </Button>
      </div>
    );
  } else {
    // 未登录用户显示登录按钮
    authContent = (
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <Button
          type="submit"
          color="secondary"
          variant="bordered"
        >
          登录
        </Button>
      </form>
    );
  }

  // 返回渲染内容
  return authContent;
}
