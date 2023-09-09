"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [verif, setVerif] = useState("");

  const handleSubmit = () => {
    if (username === "") {
      setVerif("Please check your username");
    } else if (password === "") {
      setVerif("Please check your password");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex">
      <div className="w-4/5">
        <img src="/cargo.jpg" className="h-screen" alt="" />
      </div>
      <div className="flex justify-center bg-white w-2/5 h-screen items-center">
        <div className="h-96 drop-shadow-xl ">
          <div className="w-20 h-8 bg-slate-300 mb-5 text-center"></div>
          <h1 className="text-2xl font-semibold border-b-2 border-green-800 pb-2 mb-5">
            Login
          </h1>
          <p className="text-red-500 font-semibold text-sm">{verif}</p>
          <label htmlFor="username" className="text-sm">
            Username:
          </label>
          <br />
          <input
            id="username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 w-80 bg-green-200 rounded-lg my-2 focus:outline-none focus:ring focus:ring-green-300 focus:bg-green-100"
          />{" "}
          <br />
          <label htmlFor="password" className="text-sm">
            Password:
          </label>{" "}
          <br />
          <input
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 w-80 bg-green-200 rounded-lg mb-2 focus:outline-none focus:ring focus:ring-green-300 focus:bg-green-100"
          />{" "}
          <br />
          <button
            className="p-2 w-80 text-center bg-green-800 text-white mt-10 rounded-lg hover:bg-green-500 hover:text-black hover:font-semibold"
            onClick={handleSubmit}
          >
            Login
          </button>
          <p className="mt-5 text-sm">
            any help?{" "}
            <strong className="font-semibold cursor-pointer">click me.</strong>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
