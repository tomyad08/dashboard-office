import Tabel from "@/Components/Tabel";
import { DataTabelDepartement } from "@/DataDummy/DataTabelDepartement";

const TabelAccountingFinance = () => {
  const Data = DataTabelDepartement;
  return (
    <div className="drop-shadow-xl">
      <Tabel input={Data} />
    </div>
  );
};
export default TabelAccountingFinance;
