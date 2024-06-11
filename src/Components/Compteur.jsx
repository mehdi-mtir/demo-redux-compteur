import { useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "./CompteurSlice";


function Compteur(){
    const compteur = useSelector((state)=>state.compteur.count)

    const dispatch = useDispatch();

    return <>
        <h1>{compteur}</h1>
        <div>
            <button onClick={()=>dispatch(increment())}> + </button>
            <button onClick={()=>dispatch(decrement())}> - </button>
        </div>
    </>

}

export default Compteur;