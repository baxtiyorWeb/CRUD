import { IFormInput } from "../interfaces/interfaces";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function usePost() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const onSubmit = (data: any) => {
    axios
      .post("https://63a5c4fcf8f3f6d4abff62b9.mockapi.io/api/v1/CRUD", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((response) => {
        if (response.data) {
          router.push("/");
        }
      })
      .catch((error) => {
        console.log(error.data);
      });
  };

  return {
    handleSubmit,
    register,
    onSubmit,
  };
}
