"use client";

import "../../styles/login.css";

import { Header } from "./components/header/Header.login";
import { Form } from "./components/form/Form.login";

export default function Login() {
  return (
    <section className="image w-screen h-screen flex place-content-end">
      <div className="bg-white h-screen w-[500px]">
        <div className="flex flex-col items-center justify-center w-full pt-4">
          <Header />

          <Form />
        </div>
      </div>
    </section>
  );
}
