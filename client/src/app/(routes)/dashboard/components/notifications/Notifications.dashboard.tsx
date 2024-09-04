"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell } from "@/app/icons/bell";
import { Dot } from "@/app/icons/dot";

export function Notifications() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <Bell />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="dark:bg-zinc-900 dark:text-white rounded-xl border-none text-black bg-zinc-300 font-semibold"
      >
        <DropdownMenuItem>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Dot />
              <span className="hover:text-blue-600">
                Welcome to our dashboard, thanks for using us!
              </span>
            </div>
            <span className="text-xs text-end text-zinc-600">Right now</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
