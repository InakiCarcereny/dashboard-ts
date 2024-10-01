"use client";

import { useState } from "react";
import { FormModal } from "../events/components/form/FormModal.events";
import { EventTable } from "./components/eventTable/EventTable";
import { Header } from "./components/header/Header.events";

export default function Events({ searchParams }: { searchParams: any }) {
  const query = searchParams?.query || "";
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className="flex flex-col gap-4 w-full h-full">
      <Header handleOpen={handleOpen} />

      {open && <FormModal setOpen={setOpen} />}

      <EventTable query={query} />
    </section>
  );
}
