import { useState } from "react";
import { IFormInput } from "../interfaces/interfaces";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function usePost() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [description, setDescription] = useState("");
  const [number, setNumber] = useState("");
  const router = useRouter();
  const senFormData = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post<IFormInput>(
      "https://63a5c4fcf8f3f6d4abff62b9.mockapi.io/api/v1/CRUD",
      {
        name: name,
        email: email,
        password: password,
        number: number,
        description: description,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    router.push("/");
  };
  return {
    senFormData,
    setName,
    setEmail,
    setDescription,
    setPassword,
    setNumber,
  };
}
