import Tabel from "@/Components/Tabel";
import { DataTabelDepartement } from "@/DataDummy/DataTabelDepartement";

const TabelLegal = () => {
  const Data = DataTabelDepartement;

  return (
    <div>
      <Tabel input={Data} />
    </div>
  );
};
export default TabelLegal;
