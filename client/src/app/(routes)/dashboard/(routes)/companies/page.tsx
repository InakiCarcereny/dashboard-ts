"use client";

import { useState } from "react";
import { useCompany } from "@/app/(routes)/dashboard/(routes)/companies/context/company";
import { type Company as CompanyType } from "@/app/(routes)/dashboard/(routes)/companies/context/company";
import { FormModal } from "./components/form/FormModal.companies";
import { Company } from "./components/company/Company";
import { Header } from "./components/header/Header.companies";

export default function Companies({ query }: { query: string }) {
  const [open, setOpen] = useState(false);

  const { companies } = useCompany();

  const handleOpen = () => {
    setOpen(!open);
  };

  const filteredCompanies = companies.filter((company) =>
    company.name.toLocaleLowerCase().includes(query)
  );

  return (
    <section className="flex flex-col gap-4 w-full h-full">
      <Header open={open} handleOpen={handleOpen} />

      <ul>
        {companies.map((company: CompanyType) => {
          if (
            company.logo &&
            company.logo.data &&
            Array.isArray(company.logo.data.data)
          ) {
            const logoUrl = `data:${
              company.logo.contentType
            };base64,${Buffer.from(company.logo.data.data).toString("base64")}`;

            return (
              <Company
                key={company._id}
                name={company.name}
                logo={logoUrl}
                revenue={company.revenue}
                size={company.size}
                type={company.type}
                country={company.country}
              />
            );
          }
        })}
      </ul>

      {open && <FormModal setOpen={setOpen} />}
    </section>
  );
}
