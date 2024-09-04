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
    <DropdownMenu>
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
        <DropdownMenuItem>
          <span className="hover:text-blue-600">{user?.username}</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span className="hover:text-blue-600">{user?.email}</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={logOut}>
          <span className="hover:text-blue-600">Log Out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
