export interface Users {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  birthDate: Date;
  login: Login;
  address: Address;
  phone: Phone;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: City;
  zipcode: Zipcode;
  geo: Geo;
}

export enum City {
  Anytown = "Anytown",
}

export interface Geo {
  lat: string;
  lng: string;
}

export enum Zipcode {
  The123456789 = "12345-6789",
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Login {
  uuid: string;
  username: string;
  password: Password;
  md5: Md5;
  sha1: Sha1;
  registered: Date;
}

export enum Md5 {
  C1328472C5794A25723600F71C1B4586 = "c1328472c5794a25723600f71c1b4586",
}

export enum Password {
  JsonplaceholderOrg = "jsonplaceholder.org",
}

export enum Sha1 {
  The35544A31Cc19Bd6520Af116554873167117F4D94 = "35544a31cc19bd6520af116554873167117f4d94",
}

export enum Phone {
  The5555551234 = "(555) 555-1234",
  The5555553456 = "(555) 555-3456",
  The5555555678 = "(555) 555-5678",
  The5555556789 = "(555) 555-6789",
  The5555559012 = "(555) 555-9012",
}
