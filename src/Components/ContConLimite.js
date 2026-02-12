import { useState } from "react";

const ContConLimite = () => {
const [contConLim, setContConLim] = useState(0);
const [mensaje, setMensaje] = useState("");

const sumar = () => {
    setContConLim(contConLim + 1);
    setMensaje("");
}
const restar = () => {
    if (contConLim > 0) {
      setContConLim(contConLim - 1);
      setMensaje("");
    } else {
      setMensaje("No se admiten números negativos");
    }
}
    return(<><div>
        <h1>Contador con Límite</h1>
        <h2>{contConLim}</h2>
        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        {mensaje && <p>{mensaje}</p>}
    </div>    
    </>
        );
};

export default ContConLimite;