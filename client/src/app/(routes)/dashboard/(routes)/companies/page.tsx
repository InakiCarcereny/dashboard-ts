"use client";

import { useState } from "react";
import { useCompany } from "@/app/(routes)/dashboard/(routes)/companies/context/company";
import { type Company as CompanyType } from "@/app/(routes)/dashboard/(routes)/companies/context/company";
import { FormModal } from "./components/form/FormModal.companies";
import { Company } from "./components/company/Company";
import { Header } from "./components/header/Header.companies";

export default function Companies() {
  const [open, setOpen] = useState(false);

  const { companies } = useCompany();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className="flex flex-col gap-4 w-full h-full">
      <Header open={open} handleOpen={handleOpen} />

      <div>
        {companies.map((company: CompanyType) => {
          return (
            <Company
              key={company._id}
              name={company.name}
              logo={company.logo}
              revenue={company.revenue}
              size={company.size}
              type={company.type}
              country={company.country}
            />
          );
        })}
      </div>

      {open && <FormModal setOpen={setOpen} />}
    </section>
  );
}
