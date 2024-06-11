import { useState } from "react";

function Compteur(){
    const [compteur, setCompteur] = useState(0);

    return <>
        <h1>{compteur}</h1>
        <div>
            <button> + </button>
            <button> - </button>
        </div>
    </>

}

export default Compteur;