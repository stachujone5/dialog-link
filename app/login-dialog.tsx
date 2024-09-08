"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginDialog({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const isOpen = searchParams.get("login") === "true";

  const closeDialog = () => {
    router.replace("/");
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          closeDialog();
        }
      }}
    >
      <DialogTrigger asChild>{children}</DialogTrigger>

      <DialogContent>Login</DialogContent>
    </Dialog>
  );
}
