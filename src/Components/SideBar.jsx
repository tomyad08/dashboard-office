"use client";
import Link from "next/link";

const SideDashboard = () => {
  const menuDaftar = [
    {
      id: 1,
      nama: "Home",
      d1: "M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z",
      d2: "",
      link: "/dashboard",
    },
    {
      id: 2,
      nama: "Graphics",
      d1: "M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z",
      d2: "",
      link: "#graphics",
    },
    {
      id: 3,
      nama: "Tabel",
      d1: "M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z",
      d2: "",
      link: "#Tabel",
    },
  ];
  return (
    <div>
      <div className=" w-52 bg-green-800 border border-0 text-white pe-5 py-5 h-screen">
        <div className="text-xl m-5 font-semibold">Logo</div>
        {menuDaftar.map((value) => (
          <Link href={value.link}>
            <div
              className="flex p-3 active:bg-green-200 rounded-xl active:text-black cursor-pointer"
              key={value.id}
            >
              <div className="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-calendar2-heart"
                  viewBox="0 0 16 16"
                >
                  <path d={value.d1} />
                  <path d={value.d2} />
                </svg>
              </div>
              <div>
                <p>{value.nama}</p>
              </div>
            </div>
          </Link>
        ))}
        <div className="flex p-3 hover:bg-green-200 hover:text-black active:bg-green-200 rounded-xl active:text-black mt-80">
          <div className="px-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-box-arrow-in-right"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
              />
              <path
                fillRule="evenodd"
                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
          </div>
          <Link href="/">
            <div className="cursor-pointer">
              <p>Log Out</p>
            </div>
          </Link>
        </div>
      </div>
      {/* <div className="flex justify-center w-screen bg-slate-400">
        <div className="w-11/12">{show}</div>
      </div> */}
    </div>
  );
};
export default SideDashboard;
