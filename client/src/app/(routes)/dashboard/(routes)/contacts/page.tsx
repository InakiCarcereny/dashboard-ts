"use client";

import { useUsers } from "@/app/hooks/useUsers";
import { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { userImg } from "@/app/consts/userImg";
import { Company } from "@/app/models/usersApi";

export interface MappdedUser {
  _id: number;
  _firstname: string;
  _lastname: string;
  _email: string;
  _phone: string;
  _website: string;
  _company: Company;
}

export default function Contacts() {
  const { users, getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <h3 className="font-semibold text-xl dark:text-white text-dark mb-6">
        Contacts
      </h3>
      <Table>
        <TableHeader>
          <TableRow className="w-full border-none">
            <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
              Contact
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
              Email
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
              Number
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
              Website
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
              Company
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.slice(0, 10).map((user: MappdedUser) => (
            <TableRow
              key={user._id}
              className="font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-700/40 border-none"
            >
              <TableCell className="flex items-center gap-4">
                <img
                  src={`https://api.dicebear.com/9.x/fun-emoji/svg?seed=${user._id}`}
                  alt="avatar"
                  className="rounded-full h-12 w-12"
                ></img>
                {user._firstname} {user._lastname}
              </TableCell>
              <TableCell>{user._email}</TableCell>
              <TableCell>{user._phone}</TableCell>
              <TableCell>{user._website}</TableCell>
              <TableCell>{user._company.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
