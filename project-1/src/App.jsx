import { useState } from "react"
import Startgame from "./components/startgame"
import Play from "./components/Play"


const App = () => {
    const [gameStarted, setGameStarted] = useState(false)

    function startGame() {
        setGameStarted((prev) => !prev)
    }
    return (
        <>
            {gameStarted ? <Play /> : <Startgame togle={startGame} />}

        </>
    )
}

export default App