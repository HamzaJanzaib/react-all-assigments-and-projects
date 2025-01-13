
import { useState } from "react";
import Dise from "./Dise"
import Score from "./score"
import Sellectbox from "./Sellectbox"
import Roules from "./Roules";
import Mader from "./Mader";

const Play = () => {
  const [selected, setSelected] = useState();
  const [dice, setDice] = useState(1);
  const [score, setScore] = useState(0);
  const [error, seterror] = useState("");
  const [roule, setroule] = useState(false);
  const [admiin, setMader] = useState(false);

  const resetscore = () => {
    setScore(0);
  }

  function rollDice() {
    if (!selected) {
      seterror("You have not selected any number");
      return;
    }
    const rendomNumber = Math.floor(Math.random() * 6) + 1;
    setDice(rendomNumber);
    if (selected === rendomNumber) {
      setScore((prev) => prev + rendomNumber);
    }
    else {
      setScore((prev) => prev - 2);
    }
    setSelected("");
  }

  return (
    <>
      <div className="2xl:flex 2xl:px-20-mt-1 justify-between items-center h-22 w-11/12 md:w-full sm:w-full m-auto">
        <Score score={score} />
        <Sellectbox seterror={seterror} error={error} selected={selected} setSelected={setSelected} />
      </div>
      <Dise dice={dice} setDice={setDice} rollDice={rollDice} />
      <div className="brns flex flex-col w-1/2 m-auto items-center gap-5 mt-10 ">
        <button onClick={resetscore} className="2xl:w-1/5 p-2  bg-white  text-black border-2 border-gray-900 rounded-lg  hover:bg-gray-950  hover:text-gray-100  md:w-full sm:w-full">
          <h1 className=" my-1/2 text-1xl font-bold text-center">Reset Score</h1>
        </button>
        <button onClick={
          () => setroule(!roule)
        } className="2xl:w-1/5 p-2  bg-gray-900  text-white rounded-lg hover:bg-gray-100  hover:text-gray-900 hover:border-2 hover:border-gray-900  md:w-full sm:w-full ">
          <h1 className=" my-1/2 text-1xl font-bold text-center">{roule ? "Hode" : "show"} Rules</h1>
        </button>
        <button onClick={
          () => setMader(!admiin)
        } className="2xl:w-1/5 p-2  bg-gray-900  text-white rounded-lg hover:bg-gray-100  hover:text-gray-900 hover:border-2 hover:border-gray-900 md:w-full sm:w-full">
          <h1 className=" my-1/2 text-1xl font-bold text-center">{admiin ? "Hode" : "show"} details</h1>
        </button>
      </div>
      {roule && <Roules />}

      {admiin &&<Mader />}
    </>
  )
}

export default Play