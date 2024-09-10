import { type Company as CompanyType } from "@/app/(routes)/dashboard/(routes)/companies/context/company";

export function Company({
  name,
  logo,
  revenue,
  size,
  type,
  country,
}: CompanyType) {
  return (
    <div>
      <span>{name}</span>
      <span>{logo}</span>
      <span>{revenue}</span>
      <span>{size}</span>
      <span>{type}</span>
      <span>{country}</span>
    </div>
  );
}
