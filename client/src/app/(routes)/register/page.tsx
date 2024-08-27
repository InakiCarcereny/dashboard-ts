'use client'

import "../../styles/register.css";

import { Form } from "./components/form/Form.register";
import { Header } from "./components/header/Header.register";

export default function Register() {

  return (
    <section className="image w-screen h-screen">
      <div className="bg-white h-screen w-[400px]">
        <div className="flex flex-col items-center justify-center w-full pt-4">
          <Header />

          <Form  />
        </div>
      </div>
    </section>
  );
}