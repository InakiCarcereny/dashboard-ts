"use client";

import { useUsers } from "@/app/hooks/useUsers";
import { useEffect } from "react";
import { Header } from "./components/header/Header.contacts";
import { ContactsTable } from "./components/table/ContactsTable";

export default function Contacts({ searchParams }: { searchParams: any }) {
  const { users, getUsers } = useUsers();

  const query = searchParams?.query || "";

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <Header />

      <ContactsTable users={users} query={query} />
    </>
  );
}
