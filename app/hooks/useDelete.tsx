import axios from "axios";


export default function useDelete() {

  const userDelete = async (id: number) => {
    const response = axios.delete(`https://63a5c4fcf8f3f6d4abff62b9.mockapi.io/api/v1/CRUD/${id}`)
  }
  return { userDelete }
}




