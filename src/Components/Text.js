import { useState } from "react";

const Text = () => {
    const [visib, setVisib] = useState(false);
    const manejVisib = () => {
        setVisib(!visib);
    }
    return(
        <div>
            <button onClick={manejVisib}>Mostrar / Ocultar</button>
            {visib === true ? <h1>Hola, Mundo!</h1> : <h2></h2>}
        </div>
    )
}

export default Text;