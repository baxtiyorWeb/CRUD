import axios from "axios";
import useGetUsers from "./useGetUsers";
import { useEffect } from "react";


export default function useDelete() {
  const { setIsLoading } = useGetUsers()
  const userDelete = async (id: number) => {
    setIsLoading(true)
    const response = axios.delete(`https://63a5c4fcf8f3f6d4abff62b9.mockapi.io/api/v1/CRUD/${id}`)
    setIsLoading(false)
  }

  return { userDelete }
}




