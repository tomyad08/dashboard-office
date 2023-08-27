import PriorityFunction from "@/Components/PriorityFunction";

const PriorityProjectOffice = () => {
  const inputData1 = {
    done: 60,
    pending: 20,
    reject: 20,
    name: "Priority 1",
  };
  const inputData2 = {
    done: 70,
    pending: 20,
    reject: 10,
    name: "Priority 2",
  };
  const inputData3 = {
    done: 20,
    pending: 70,
    reject: 10,
    name: "Priority 3",
  };

  return (
    <div className="flex justify-around bg-white rounded-t-lg">
      <PriorityFunction input={inputData1} />
      <PriorityFunction input={inputData2} />
      <PriorityFunction input={inputData3} />
    </div>
  );
};

export default PriorityProjectOffice;
