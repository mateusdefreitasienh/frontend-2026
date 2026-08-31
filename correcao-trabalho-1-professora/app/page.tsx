"use client";

import Button from "@/components/button";
import Input from "@/components/input";
import SignInForm from "@/components/sign-in-form";

function quandoClicaCapuccina() {
  alert("ballerina capuccina minha waifu!");
}

export default function Home() {
  return (
    <div>
      <Button className="bg-red-500">Ballerina</Button>
      <Button onClick={quandoClicaCapuccina}>Capuccina</Button>
      <Input placeholder="xuxa só para baixinhos" />
      <SignInForm />
    </div>
  );
}
