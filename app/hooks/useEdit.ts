import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IUsersEdit } from "../interfaces/interfaces";

export default function useEdit() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState<number>();
  const [description, setDescription] = useState("");
  const params = useParams();
  const router = useRouter();
  const editForGetUser = async () => {
    await axios
      .get<IUsersEdit>(
        `https://63a5c4fcf8f3f6d4abff62b9.mockapi.io/api/v1/CRUD/${params.id}`
      )
      .then((item) => {
        setName(item.data.name);
        setEmail(item.data.email);
        setPassword(item.data.password);
        setNumber(item.data.number);
        setDescription(item.data.description);
      });
  };

  const editUsers = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = axios.put(
      `https://63a5c4fcf8f3f6d4abff62b9.mockapi.io/api/v1/CRUD/${params.id}`,
      {
        name: name,
        email: email,
        password: password,
        number: number,
        description: description,
      }
    );

    router.push("/");
  };

  useEffect(() => {
    editForGetUser();
  }, []);

  return {
    setName,
    setEmail,
    setPassword,
    setDescription,
    setNumber,
    editUsers,
    name,
    email,
    password,
    number,
    description,
  };
}
