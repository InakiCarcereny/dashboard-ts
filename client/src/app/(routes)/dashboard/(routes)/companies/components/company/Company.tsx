import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useCompany } from "../../context/company";
import { toast } from "sonner";
import { Trash } from "@/app/icons/trash";
import { useEffect, useState } from "react";

export function CompanyTable({ query }: { query: string }) {
  const [message, setMessage] = useState("");

  const { companies, deleteCompany, error } = useCompany();

  const filteredCompanies = companies.filter((company) =>
    company.name.toLocaleLowerCase().includes(query)
  );

  useEffect(() => {
    if (companies.length === 8) {
      setMessage("You can only have 8 companies at the moment");
      return;
    } else {
      setMessage("");
    }
  }, [companies]);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="w-full border-none">
            <TableHead className="w-[400px] font-semibold text-blue-600 text-base sm:text-xl">
              Name
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-base sm:text-xl">
              Revenue
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-base sm:text-xl">
              Size
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-base sm:text-xl">
              Type
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-base sm:text-xl">
              Country
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-base sm:text-xl">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCompanies.map((company) => {
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
                <TableRow
                  key={company._id}
                  className="font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-700/40 border-none"
                >
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <img
                        className="w-14 h-14"
                        src={logoUrl}
                        alt={company.name}
                      />
                      <span className="dark:text-white font-semibold">
                        {company.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>{company.revenue}</TableCell>
                  <TableCell>{company.size}</TableCell>
                  <TableCell>{company.type}</TableCell>
                  <TableCell>{company.country}</TableCell>
                  <TableCell className="flex flex-col sm:flex-row items-center gap-2">
                    <button
                      onClick={() => {
                        deleteCompany(company);
                        toast.success("Company deleted successfully");
                      }}
                      className="px-2 py-2 rounded-full cursor-pointer"
                    >
                      <Trash />
                    </button>
                  </TableCell>
                </TableRow>
              );
            }
          })}
        </TableBody>
      </Table>
      <p className="text-red-500 text-sm font-semibold">{message}</p>
      {error.map((err) => {
        return (
          <span key={err} className="text-red-500 text-sm font-semibold">
            {err}
          </span>
        );
      })}
    </>
  );
}
