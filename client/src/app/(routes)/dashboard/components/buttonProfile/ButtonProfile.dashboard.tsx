"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@/app/icons/user";
import { useUser } from "@/app/context/user";

export function ButtonProfile() {
  const { user, logOut } = useUser();

  return (
    <DropdownMenu className="bg-white">
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <User />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="dark:bg-zinc-900 dark:text-white rounded-xl border-none text-black bg-zinc-300 font-semibold"
      >
        <DropdownMenuItem>{user?.username}</DropdownMenuItem>
        <DropdownMenuItem>{user?.email}</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={logOut}>
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
