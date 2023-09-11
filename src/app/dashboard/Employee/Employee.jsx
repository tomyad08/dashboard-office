"use client";
import { useState } from "react";
import Link from "next/link";
import { DataEmployee } from "@/DataDummy/DataEmployee";
import { DataHeader } from "@/DataDummy/DataHeader";

const Employee = () => {
  const [search, setSearch] = useState("");
  const [Data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  let Datas = DataEmployee;
  const Header = DataHeader;

  if (loading) {
    setData(Datas);
    setLoading(false);
  }

  const handleTrash = (id) => {
    let result = [];
    Data.filter((value) => {
      if (value.id !== id) {
        result.push(value);
      }
    });
    Datas = result;
    setData(Datas);
  };

  const style = "bg-white py-1 px-5 text-sm w-30";

  return (
    <div>
      {loading ? (
        <>
          <p>Loading ...</p>
        </>
      ) : (
        <>
          <div className="p-2 rounded-xl my-5">
            <div className="flex justify-end">
              <input
                className="p-1 bg-green-100 rounded-s-lg text-center text-black focus:outline-none"
                placeholder="Search Name"
                onChange={(e) => setSearch(e.target.value)}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                className="bi bi-search p-2 bg-green-100 rounded-e-lg"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
            <div className="flex justify-around rounded-t-xl bg-green-800 mt-5">
              {Header.map((value) => (
                <div
                  className="ps-2 py-2 w-40 text-white font-semibold rounded-xl"
                  key={value.id}
                >
                  <h1>{value.name}</h1>
                </div>
              ))}
            </div>
            <div className="rounded-b-xl p-2 mb-5 bg-white">
              <div className="h-96 overflow-y-scroll">
                {Data.filter((value) => {
                  if (search == "") {
                    return value;
                  } else if (
                    value.name.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return value;
                  }
                }).map((value) => (
                  <div
                    className="flex justify-between hover:bg-blue-100 border-b-2 border-slate-300 p-2 text-sm"
                    key={value.id}
                  >
                    <div className="w-40">{value.name}</div>

                    <div className="w-40">{value.departement}</div>
                    <div className="w-40">{value.nik}</div>
                    <div className="w-40">{value.employee_number}</div>
                    <div className="w-40">{value.born}</div>
                    <div className="w-40">
                      {value.address}{" "}
                      <div className="flex justify-end mt-3">
                        <Link href={`/dashboard/${value.employee_number}`}>
                          <div>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi mx-2 bi-pencil"
                              viewBox="0 0 16 16"
                            >
                              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
                            </svg>
                          </div>
                        </Link>
                        <div
                          onClick={() => handleTrash(value.id)}
                          className="cursor-pointer"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-trash3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="/dashboard/addForm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="52"
                fill="green"
                className="bi bi-plus-circle-fill bg-white rounded-full"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
              </svg>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
export default Employee;
