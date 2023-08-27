import BackToHome from "@/Components/BackHome";
import PrioritySupportingField from "./PriorityMechanics";
import ProgressSupportingField from "./ProgressMechanic";
import TabelSupportingField from "./Tabel";

const SupportingField = () => {
  return (
    <div className="bg-slate-400">
      <div className="flex justify-end pt-5 pe-5 cursor-pointer">
        <h1 className="mt-1 mx-2">Home</h1>
        <BackToHome />
      </div>
      <div className="flex justify-center ">
        <div className="w-11/12">
          <h1 className="text-2xl text-start font-bold pb-3">
            Supporting Field Dashboard
          </h1>
          <PrioritySupportingField />
          <div className="flex justify-start bg-white p-2 rounded-b-xl">
            <ProgressSupportingField />
            <div className="border border-2 rounded-lg p-5 ms-5 text-justify">
              <h1 className="text-xl mb-5">Notes:</h1>
              <p className="mb-2 font-semibold">Dear Supporting Field Teams,</p>
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
          <TabelSupportingField />
        </div>
      </div>
    </div>
  );
};
export default SupportingField;
