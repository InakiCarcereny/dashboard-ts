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
    <li className="flex items-center justify-between mt-6">
      <div className="flex items-center gap-2">
        <img className="w-14 h-14" src={logo} alt="company logo" />
        <span>{name}</span>
      </div>
      <span>{revenue}</span>
      <span>{size}</span>
      <span>{type}</span>
      <span>{country}</span>
    </li>
  );
}
