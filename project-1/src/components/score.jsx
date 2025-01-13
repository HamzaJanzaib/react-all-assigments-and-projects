
const Score = ({ score }) => {
  return (
    <div className="2xl:w-1/6 p-4 pt-8  text-center items-end md:w-full sm:w-full">
        <h1 className="2xl:text-6xl font-bold md:text-4xl sm:text-2xl m-auto">{score}</h1>
        <p className="2xl: text-2xl font-light md:text-xl sm:text-2xl ">Total Score</p>
    </div>
  )
}

export default Score