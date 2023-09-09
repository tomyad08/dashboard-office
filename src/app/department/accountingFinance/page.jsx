import BackToHome from "@/Components/BackHome";
import PriorityAccountingFinance from "./PriorityMechanics";
import ProgressAccountingFinance from "./ProgressMechanic";
import TabelAccountingFinance from "./Tabel";
import SideDashboard from "@/Components/SideBar";

const AccountingFinance = () => {
  return (
    <div className="flex">
      <div>
        <SideDashboard />
      </div>
      <div className="bg-slate-400 h-screen">
        <div className="h-screen overflow-y-scroll py-5">
          <div className="flex justify-center ">
            <div className="w-11/12">
              <h1 className="text-2xl text-start font-bold pb-3">
                Accounting & Finance Dashboard
              </h1>

              <div
                className="bg-white p-2 rounded-xl mb-5 drop-shadow-xl"
                id="graphics"
              >
                <ProgressAccountingFinance />
              </div>
              <div
                className="bg-white p-2 rounded-xl drop-shadow-xl"
                id="Tabel"
              >
                <PriorityAccountingFinance />
                <TabelAccountingFinance />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountingFinance;
