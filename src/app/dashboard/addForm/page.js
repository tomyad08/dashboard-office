"use client";
import { DataEmployee } from "@/DataDummy/DataEmployee";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const DetailEmployee = (params) => {
  const router = useRouter();
  const no_employee = params.params.slug;
  const Data = DataEmployee;
  const select = Data.filter((value) => {
    if (value.employee_number.includes(no_employee)) {
      return value;
    }
  });

  const [inputs, setInputs] = useState("");

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };
  const style =
    "w-full border-1 rounded-lg bg-slate-200 p-3 my-1 focus:outline-none focus:ring focus:ring-green-300 focus:bg-green-100";
  return (
    <div className="flex py-10 justify-center bg-slate-400">
      <div className="w-2/4 bg-white p-5">
        <h1>Logo</h1>
        <div className="border-b-2 border-slate-200 my-2">
          <h1 className="text-4xl font-semibold my-2">Add Employee's Data</h1>
        </div>
        <div className="text-sm">
          <label htmlFor="Name" className="font-semibold">
            Name
            <input
              id="Name"
              name="name"
              value={inputs.name || ""}
              type="text"
              className={style}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="Department" className="font-semibold">
            Department
            <input
              id="Department"
              name="departement"
              value={inputs.departement || ""}
              type="text"
              className={style}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="Employee" className="font-semibold">
            No. Employee
            <input
              id="Employee"
              name="employee_number"
              value={inputs.employee_number || ""}
              type="text"
              className={style}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="NIK" className="font-semibold">
            No. Identity
            <input
              id="NIK"
              name="nik"
              type="number"
              value={inputs.nik || ""}
              className={style}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="born" className="font-semibold">
            Born
            <input
              id="born"
              type="text"
              name="born"
              value={inputs.born || ""}
              className={style}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="address" className="font-semibold">
            Address
            <input
              id="address"
              type="text"
              name="address"
              value={inputs.address || ""}
              className={style}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="domisili" className="font-semibold">
            Domisili
            <input
              id="domisili"
              type="text"
              name="domisili"
              value={inputs.domisili || ""}
              className={style}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="education" className="font-semibold">
            Education
            <input
              id="education"
              type="text"
              name="education"
              value={inputs.education || ""}
              className={style}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="npwp" className="font-semibold">
            NPWP
            <input
              id="npwp"
              type="number"
              name="npwp"
              value={inputs.npwp || ""}
              className={style}
              onChange={handleChange}
            />
          </label>

          <label htmlFor="salary" className="font-semibold">
            Salary
            <input
              id="salary"
              type="text"
              name="salary"
              value={inputs.salary || ""}
              className={style}
              onChange={handleChange}
            />
          </label>
          <button
            className="w-full border border-2 border-white bg-green-800 py-3 text-center rounded-lg text-white mb-2 font-semibold mt-10"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <p className="pt-5">
            Nothing has been changed,{" "}
            <Link href="/dashboard">
              {" "}
              <strong className="py-2 px-4 bg-green-100 rounded-lg cursor-pointer">
                back
              </strong>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default DetailEmployee;
