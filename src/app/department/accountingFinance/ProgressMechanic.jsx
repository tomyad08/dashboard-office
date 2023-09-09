import Progress from "@/Components/Progress";
import { DataProgress } from "@/DataDummy/DataProgress";

const ProgressAccountingFinance = () => {
  const planed_progress = [];
  const actual_progress = [];
  const label_progress = [];

  const Data = DataProgress;

  Data.map((value) => {
    planed_progress.push(value.progress_planing);
    actual_progress.push(value.actual_progress);
    label_progress.push(value.day);
  });

  const inputData = {
    planed: planed_progress,
    actual: actual_progress,
    label: label_progress,
  };

  return (
    <div className="bg-white ">
      <Progress input={inputData} />
    </div>
  );
};

export default ProgressAccountingFinance;
