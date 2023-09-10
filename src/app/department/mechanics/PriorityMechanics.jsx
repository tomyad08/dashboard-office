import PriorityFunction from "@/Components/PriorityFunction";

const PriorityMechanics = () => {
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
    <div>
      <h1 className="text-center text-3xl font-bold mb-3 pt-5">
        Exploration Bangkalan 2023
      </h1>
      <p className="mx-5 text-justify text-sm pb-5">
        The division of three priorities helps in organizing tasks based on
        their importance and urgency, facilitating effective time management.
      </p>

      <div className="flex justify-around">
        <PriorityFunction input={inputData1} />
        <PriorityFunction input={inputData2} />
        <PriorityFunction input={inputData3} />
      </div>
    </div>
  );
};

export default PriorityMechanics;
