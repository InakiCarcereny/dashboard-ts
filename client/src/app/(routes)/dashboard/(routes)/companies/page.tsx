"use client";

import { useState } from "react";
import { FormModal } from "./components/form/FormModal.companies";
import { Header } from "./components/header/Header.companies";
import { CompanyTable } from "./components/company/Company";

export default function Companies({ searchParams }: { searchParams: any }) {
  const [open, setOpen] = useState(false);

  const query = searchParams?.query || "";

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className="flex flex-col gap-4 w-full h-full">
      <Header open={open} handleOpen={handleOpen} />

      <CompanyTable query={query} />

      {open && <FormModal setOpen={setOpen} />}
    </section>
  );
}
