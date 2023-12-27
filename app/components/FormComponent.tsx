"use client";

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import usePost from "../hooks/usePost"
export default function FormComponent() {
  const { senFormData, setEmail, setName, setNumber, setPassword, setDescription } = usePost()

  return (
    <div>
      <h1>form build</h1>
      <form className="w-full h-screen border flex justify-center items-center flex-col"
        onSubmit={senFormData}
      >

        <div>
          <Input placeholder="enter your name" className="mt-5 w-[300px] outline-none" required onChange={(e) => setName(e.target.value)} />
          <Input placeholder="enter your email" className="mt-5 w-[300px] outline-none" required onChange={(e) => setEmail(e.target.value)} />
          <Input placeholder="enter your password" className="mt-5 w-[300px] outline-none" required onChange={(e) => setPassword(e.target.value)} />
          <Input placeholder="enter your phone number" className="mt-5 w-[300px] outline-none" required onChange={(e) => setNumber(e.target.value)} />
          <Textarea placeholder="enter your description" className="mt-5 w-[300px] outline-none" onChange={(e) => setDescription(e.target.value)} />

        </div>
        <button className="p-2 px-8 rounded-md border border-slate-500 mt-5">send </button>
      </form>
    </div>
  )
}