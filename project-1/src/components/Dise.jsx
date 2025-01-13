

const Dise = ({dice , setDice , rollDice}) => {


console.log(dice)
  return (
    <section className="dise flex flex-col mt-20 items-center" >
        <img onClick={rollDice} className="cursor-pointer" src={`./public/dice_${dice}.png`} alt="dice_1" />
        <button className="px-4 font-bold rounded-lg mt-5">Click on Dice to roll</button>
    </section>
  )
}

export default Dise