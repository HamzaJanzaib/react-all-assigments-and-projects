// Desc: This is a select box component

function Sellectbox({ selected, setSelected, error, seterror }) {

    const arr = [1, 2, 3, 4, 5, 6,]

    const handleSelect = (item) => {
        setSelected(item)
        seterror("")
    }
    return (
        <>
            <div className="main 2xl:flex flex-wrap flex-col mt-3 mx-20 justify-end items-end w-fit h-1/2 gap-2 md:w-full m-auto sm:w-full " >
                <p className="p-2 font-bold text-sm text-red-500">{error}</p>
                <div className="flex flex-wrap justify-center items-center gap-2" >
                    {
                        arr.map((item, index) => (
                            <div
                                key={index} onClick={() => handleSelect(item)} className={`box font-bold cursor-pointer px-3 py-2 ${item === selected ? "bg-gray-950" : "bg-gray-100"}  ${item === selected ? "text-white" : "text-black"} shadow-lg rounded-lg border-2`}>
                                {item}
                            </div>
                        ))}
                </div>
            </div>
        </>
    )
}

export default Sellectbox