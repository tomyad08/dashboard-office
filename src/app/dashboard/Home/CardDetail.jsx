import { DataDetailCompany } from "@/DataDummy/DataDetailCompany";

const CardDetail = () => {
  const data = DataDetailCompany;
  return (
    <div className="flex justify-between mt-3">
      {data.map((value) => (
        <div
          className="bg-blue-100 p-2 rounded-lg w-60 flex justify-between drop-shadow-xl"
          key={value.id}
        >
          <div className="bg-green-800 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="white"
              className="bi bi-person-lines-fill"
              viewBox="0 0 16 16"
            >
              <path d={value.image} />
            </svg>
          </div>
          <div>
            <h1 className="text-sm text-end">{value.name}</h1>
            <p className="text-end font-semibold text-xl">{value.number}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default CardDetail;
