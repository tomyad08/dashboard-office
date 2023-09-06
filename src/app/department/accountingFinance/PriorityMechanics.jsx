import PriorityFunction from "@/Components/PriorityFunction";

const PriorityAccountingFinance = () => {
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
    <div className="bg-white rounded-lg">
      <div className="flex justify-around">
        <PriorityFunction input={inputData1} />
        <PriorityFunction input={inputData2} />
        <PriorityFunction input={inputData3} />
      </div>
      <p className="text-sm text-justify px-5 pb-5">
        The division of exploration projects into three priorities with the
        conditions "success," "pending," and "rejected" is used to: Manage
        resources effectively, monitor project performance clearly, identify and
        address risks, provide flexibility in planning, ensure a more structured
        project management.
      </p>
    </div>
  );
};

export default PriorityAccountingFinance;
