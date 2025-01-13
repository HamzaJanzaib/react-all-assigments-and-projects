
function Startgame({ togle }) {

  return (
    <>
      <section className="w-10/12 m-auto h-screen text-black flex sm:flex-row flex-col">
        <div className="h-full w-1/2 relative sm:h-3/4"> 
          <img className="w-3/2 h-3/2 absolute translate-x-20 translate-y-1/2 sm:w-2/2 h-2/2" src="./public/dices 1.png" alt="" />
        </div>
        <div className="h-full w-1/2 relative ">
          <div className="h-1/2 w-fit absolute -translate-x-1 translate-y-1/2  p-6">
            <h1 className="text-9xl font-bold text-center">DICE GAME</h1>
            <button onClick={ togle } className="w-1/2 p-4 bg-gray-900  text-white rounded-lg mt-10 hover:bg-gray-100  hover:text-gray-900 hover:border-2 hover:border-gray-900 ">
              <h1 className=" my-1/2 text-1xl font-bold text-center">START GAME</h1>
            </button>
          </div>
        </div>
      </section>

    </>
  )
}

export default Startgame
