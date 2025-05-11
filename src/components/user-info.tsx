import Image from "next/image";

import { auth } from "../auth";

export default async function UserInfo() {
  const session = await auth();

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
