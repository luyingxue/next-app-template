"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";

export default function UserInfoClient() {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <div>
      <p>{JSON.stringify(session.user)}</p>
      <Image
        alt="User Avatar"
        className="rounded-full"
        height={40}
        src={session.user.image || ""}
        width={40}
      />
    </div>
  );
}
