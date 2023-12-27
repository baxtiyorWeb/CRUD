import { useRouter } from "next/navigation";
export default function useId() {
  const router = useRouter()
  const editForm = async (id: number) => {

    router.push(`/edit/${id}`);
  };

  return { editForm }
}
