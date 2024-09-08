"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useRouter, useSearchParams } from "next/navigation";

export function LoginDialog() {
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
      <DialogContent>Login</DialogContent>
    </Dialog>
  );
}
