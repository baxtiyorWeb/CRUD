import { useEffect, useState } from "react";
import { IUsers } from "../interfaces/interfaces";
import axios from "axios";

export default function useGetUsers() {

  const [user, getUser] = useState<IUsers[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const getUsers = async () => {
    setIsLoading(true)
    await axios.get("https://63a5c4fcf8f3f6d4abff62b9.mockapi.io/api/v1/CRUD")
      .then(res => getUser(res.data))
    setIsLoading(false)
  }

  useEffect(() => {
    getUsers()
  }, [])


  return { user, isLoading, setIsLoading }
}
