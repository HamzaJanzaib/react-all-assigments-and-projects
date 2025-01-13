
const Roules = () => {
    return (
        <section className="roules py-2 px-6 flex flex-col 2xl:w-1/4 m-auto mt-10 bg-red-100 rounded-lg md:w-full sm:w-full ">
            <h2 className="font-bold text-2xl">How to play dice game</h2>
            <br />
            <p>1. Select a number between 1 to 6</p>
            <p>2. Click on dice image to roll the dice</p>
            <p>
                3. after click on  dice  if selected number is equal to dice <br />number you will get same point as dice
            </p>
            <p>
                4. if you get wrong guess then  2 point will be dedcuted from your score
            </p>
        </section>
    )
}

export default Roules