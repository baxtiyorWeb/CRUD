"use client"

import Link from "next/link";
import useGetUsers from "./hooks/useGetUsers";
import { useState } from "react";

import { LiaEdit } from "react-icons/lia"
import { MdDelete } from "react-icons/md"
import useDelete from "./hooks/useDelete";
import useId from "./hooks/useId";

export default function Home() {
  const { user, isLoading } = useGetUsers()
  const { editForm } = useId()
  const { userDelete } = useDelete()
  const [search, setSearch] = useState('')

  return (
    <div>
      <div className="h-[80px] border  flex justify-between items-center">
        <div className="h-[100%] flex  items-center">
          <Link href={'/'} className="text text-2xl ml-10">CRUD</Link>
        </div>
        <div>
          <Link href={'/form'} className="text text-2xl mr-10  border border-slate-600 px-10 py-2">create</Link>
        </div>


      </div>

      <div>

        {isLoading ? <h2 className="text text-center mt-5">loading ...</h2> : user.length === 0 ? <h2 className="text text-center mt-5">empty data</h2> : <table id="table" className="table-hover table ">

          <thead className="w-full border ">
            <tr className="w-full border border-slate-600">
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>mobile</th>
              <th>password</th>
              <th>description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {user
              .filter((users) => users.name.toLowerCase().includes(search))
              .map((item, index) => {
                return (
                  <tr
                    key={item.name}
                    className={
                      "even-class  font-normal text-[#398dc9] even:hover:bg-[#E7E9EB] dark:bg-[#353C48] dark:text-[#EEE8CC] even:dark:bg-[#313843] dark:hover:bg-[#353C48]"
                    }
                  >
                    <>
                      <td>{index + 1}</td>
                      <td
                        className="cursor-pointer select-none"
                      >
                        {item.name}
                      </td>
                      <td>{item.email}</td>
                      <td>{item.password}</td>
                      <td>{item.number}</td>
                      <td>{item.description}</td>

                      <td className={"td_flex"}>
                        <span className="icons" onClick={() => editForm(item.id)}>
                          <LiaEdit />
                        </span>
                        <span className="icons" onClick={() => userDelete(item.id)}>
                          <MdDelete />
                        </span>
                      </td>
                    </>
                  </tr>
                );
              })}
          </tbody>
        </table>}


      </div>

    </div>
  )
}
