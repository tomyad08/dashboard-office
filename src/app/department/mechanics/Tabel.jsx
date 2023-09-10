import Tabel from "@/Components/Tabel";
import { DataTabelDepartement } from "@/DataDummy/DataTabelDepartement";

const TabelMechanics = () => {
  const Data = DataTabelDepartement;

  return (
    <div id="table">
      <Tabel input={Data} />
    </div>
  );
};
export default TabelMechanics;
