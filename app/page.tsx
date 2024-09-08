import { LoginDialog } from "./login-dialog";
import { Suspense } from "react";
import { cookies } from "next/headers";
import { LoginButton } from "./login-button";

export default function Home() {
  cookies();
  return (
    <div className="h-screen w-screen place-items-center">
      <LoginButton />
      <Suspense>
        <LoginDialog />
      </Suspense>
    </div>
  );
}
