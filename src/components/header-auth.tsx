"use client";
// 导入必要的依赖
import { Button, Avatar, Popover, PopoverTrigger, PopoverContent, Spinner } from "@heroui/react";
import { useSession, signIn, signOut } from "next-auth/react";

// HeaderAuth 组件
export default function HeaderAuth() {
  // 获取当前用户会话
  const { data: session,status } = useSession();
  // 定义渲染内容
  let authContent: React.ReactNode;

  if (status === "loading") {
    // 加载状态显示 Spinner
    authContent = (
      <Spinner 
        size="sm"
        color="primary"
      />
    );
  } else if (session?.user) {
    // 已登录用户显示头像和退出按钮
    authContent = (
      <div className="flex items-center gap-2">
        {session.user.image && (
          <Popover placement="bottom">
            <PopoverTrigger>
              <Avatar
                isBordered
                alt="用户头像"
                size="sm"
                src={session.user.image}
                className="cursor-pointer"
              />
            </PopoverTrigger>
            <PopoverContent>
              <div className="px-1 py-2">
                <Button 
                  color="primary" 
                  onPress={() => signOut()}
                  className="w-full"
                >
                  退出登录
                </Button>
              </div>
            </PopoverContent>
          </Popover>
        )}
      </div>
    );
  } else {
    // 未登录用户显示登录按钮
    authContent = (
      <Button
        color="primary"
        variant="bordered"
        onPress={() => signIn("github")}
      >
        登录
      </Button>
    );
  }

  // 返回渲染内容
  return authContent;
}
