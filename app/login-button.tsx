"use client";

import { Button } from "@/components/ui/button";

export function LoginButton() {
  function openLoginDialog() {
    const params = new URLSearchParams();
    params.set("login", "true");
    window.history.pushState(null, "", `?${params.toString()}`);
  }

  return <Button onClick={openLoginDialog}>Login</Button>;
}
