"use client";

import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (): void => {
    setLoading(true);
    setError(false);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User logged in:", user);
        router.push("/dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        setError(true);
      });
    setLoading(false);
  };

  return (
    <main className="w-full md:flex items-center justify-center min-h-screen bg-white">
      <div className="flex items-center justify-center w-full md:w-[55%]">
        <div className="max-w-[620px] w-full py-[62px] max-h-[601px] h-full flex justify-center bg-white items-center flex-col">
          <div className="w-full px-10 md:px-20 h-full mt-[24px]">
            <h1 className="text-abgp-700 text-3xl font-bold mb-12">
              Welcome to DashCompare
            </h1>
            <div className="mt-8">
              <Input
                type="email"
                name="email"
                placeholder="email@company.com"
                onChange={(e) => setEmail(e.target.value)}
                label="Email Address"
                labelPlacement="outside"
                size="md"
              />
            </div>
            <div className="mt-10">
              {/* <div className="text-sm font-normal text-abn-700">Password</div> */}
              <Input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                labelPlacement="outside"
                label="Password"
                size="md"
              />
            </div>

            <Button
              isLoading={loading}
              isDisabled={email === "" || password === ""}
              onPress={handleLogin}
              radius="none"
              className="w-full rounded-[4px] mt-8 h-[48px] bg-abgp-700 text-abb-100 text-sm font-bold leading-normal"
            >
              Login
            </Button>
            {error && (
              <div className="text-sm font-normal text-red-500 mt-2">
                Incorrect email or password
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
