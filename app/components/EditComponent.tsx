"use client"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import useEdit from "../hooks/useEdit";

export default function EditComponent() {
  const { editUsers, setDescription, setEmail, setName, setPassword, setNumber, description, email, name, number, password } = useEdit()
  return <div>
    <h1>form build</h1>
    <form className="w-full h-screen border flex justify-center items-center flex-col"
      onSubmit={editUsers}
    >

      <div>
        <Input placeholder="enter your name" className="mt-5 w-[300px] outline-none" required onChange={(e) => setName(e.target.value)} defaultValue={name || ""} />
        <Input placeholder="enter your email" className="mt-5 w-[300px] outline-none" required onChange={(e) => setEmail(e.target.value)} defaultValue={email || ""} />
        <Input placeholder="enter your password" className="mt-5 w-[300px] outline-none" required onChange={(e) => setPassword(e.target.value)} defaultValue={password || ""} />
        <Input placeholder="enter your phone number" className="mt-5 w-[300px] outline-none" required defaultValue={number || ""} />
        <Textarea placeholder="enter your description" className="mt-5 w-[300px] outline-none" onChange={(e) => setDescription(e.target.value)} defaultValue={description || ""} />

      </div>
      <button className="p-2 px-8 rounded-md border border-slate-500 mt-5">send </button>
    </form>
  </div>;
}
