import BackToHome from "@/Components/BackHome";
import PriorityProjectOffice from "./PriorityMechanics";
import ProgressProjectOffice from "./ProgressMechanic";
import TabelProjectOffice from "./Tabel";

const ProjectOffice = () => {
  return (
    <div className="bg-slate-400">
      <div className="flex justify-end pt-5 pe-5 cursor-pointer">
        <h1 className="mt-1 mx-2">Home</h1>
        <BackToHome />
      </div>
      <div className="flex justify-center ">
        <div className="w-11/12">
          <h1 className="text-2xl text-start font-bold pb-3">
            Project Office Dashboard
          </h1>
          <PriorityProjectOffice />
          <div className="flex justify-start bg-white p-2 rounded-b-xl">
            <ProgressProjectOffice />
            <div className="border border-2 rounded-lg p-5 ms-5 text-justify">
              <h1 className="text-xl mb-5">Notes:</h1>
              <p className="mb-2 font-semibold">
                Dear Accounting & Finance Teams,
              </p>
              <p className="mb-2">
                First of all I wanna saya great Job for you guys. Thanks for
                your dedication, we have 512 day to solve this project. Good
                luck and keep the progress.
              </p>
              <p>
                Last but not least, I wanna invite you all to join diner
                together at Makaci Kafe after Isya.
              </p>
              <p className="pt-2 font-semibold">Best Regards,</p>
              <p className=" text-blue-500 font-semibold">Abdullah Ubaid</p>
            </div>
          </div>
          <TabelProjectOffice />
        </div>
      </div>
    </div>
  );
};
export default ProjectOffice;
