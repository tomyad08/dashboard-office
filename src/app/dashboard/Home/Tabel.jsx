import { DataHeaderTableHome } from "@/DataDummy/DataHeaderTabelHome";
import { DataDummy } from "../../../DataDummy/DataDummy";
const Tabel = () => {
  const Data = DataDummy;
  const head = DataHeaderTableHome;
  const style = "bg-white px-5 py-1 text-sm w-40 h-10 text-center";
  return (
    <div className="mt-4">
      {Data ? (
        <div>
          <div className="flex justify-around rounded-t-xl bg-green-600">
            {head.map((value) => (
              <div
                className="py-1 px-10 rounded-xl font-semibold text-white"
                key={value.id}
              >
                <h1>{value.name}</h1>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-b-xl p-2">
            <div className="h-60 overflow-y-scroll">
              <table className="mx-3">
                <tbody>
                  {Data.map((value) => (
                    <tr key={value.id}>
                      <td className={style}>{value.name}</td>
                      <td className={style}>{value.departemen}</td>
                      <td className={style}>{value.start}</td>
                      <td className={style}>{value.break}</td>
                      <td className={style}>{value.finish}</td>
                      <td className={style}>
                        <p className={value.style}>{value.status}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
};
export default Tabel;
