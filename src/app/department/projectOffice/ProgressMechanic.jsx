import Progress from "@/Components/Progress";

const ProgressProjectOffice = () => {
  const inputData = {
    planed: [10, 12, 15, 16, 20, 21, 22],
    actual: [10, 13, 16, 17, 21, 24, 25],
  };

  return (
    <div className="flex justify-around bg-white ">
      <Progress input={inputData} />
    </div>
  );
};

export default ProgressProjectOffice;
