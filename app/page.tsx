import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginDialog } from "./login-dialog";
import { Suspense } from "react";
import { cookies } from "next/headers";

export default function Home() {
  cookies();
  return (
    <div className="h-screen w-screen place-items-center">
      <Suspense>
        <LoginDialog>
          <Button asChild>
            <Link
              href={{
                search: "?login=true",
              }}
            >
              Login
            </Link>
          </Button>
        </LoginDialog>
      </Suspense>
    </div>
  );
}
