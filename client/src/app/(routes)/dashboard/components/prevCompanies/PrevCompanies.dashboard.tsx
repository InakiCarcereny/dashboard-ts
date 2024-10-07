import { Building } from "@/app/icons/building";
import { useCompany } from "../../(routes)/companies/context/company";
import Link from "next/link";
import { ArrowMinRight } from "@/app/icons/arrowMinRight";

export function PrevCompanies() {
  const { companies } = useCompany();

  return (
    <div className="h-[275px] w-full sm:w-full md-full lg-full xl:w-[292px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2 flex flex-col justify-between">
      <div className="flex flex-col">
        <span className="flex items-center gap-2 dark:text-white text-sm font-semibold">
          <Building className="text-blue-600" />
          Companies
        </span>

        <ul className="flex flex-col mt-4 gap-2">
          {companies.slice(0, 4).map((company) => {
            if (
              company.logo &&
              company.logo.data &&
              Array.isArray(company.logo.data.data)
            ) {
              const logoUrl = `data:${
                company.logo.contentType
              };base64,${Buffer.from(company.logo.data.data).toString(
                "base64"
              )}`;

              return (
                <li className="flex items-center gap-4" key={company._id}>
                  <img className="h-10 w-10" src={logoUrl} alt={company.name} />
                  <span className="font-semibold text-sm dark:text-white">
                    {company.name}
                  </span>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <Link
        href="/dashboard/latest-activities"
        className="text-sm dark:text-white text-black font-semibold hover:text-blue-600 dark:hover:text-blue-600 duration-150 cursor-pointer flex items-center gap-2"
      >
        See more
        <ArrowMinRight />
      </Link>
    </div>
  );
}
