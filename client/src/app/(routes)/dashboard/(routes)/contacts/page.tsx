"use client";

import { useUsers } from "@/app/hooks/useUsers";
import { useEffect } from "react";
import { Header } from "./components/header/Header.contacts";
import { ContactsTable } from "./components/table/ContactsTable";

export default function Contacts() {
  const { users, getUsers } = useUsers();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <>
      <Header />

      <ContactsTable users={users} />
    </>
  );
}
