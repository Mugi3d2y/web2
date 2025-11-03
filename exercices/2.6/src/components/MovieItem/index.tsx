import type { MovieProps } from "../../../types";
import { useState } from "react";



const MovieItem = ({title,director,description} : MovieProps) => {

    const [onClick, setOnClick] = useState(false);

    const handleOnClick = () => {
        setOnClick(!onClick);
    }
    return <>
            <strong>{title}</strong> - Réalisateur : {director}
            <button onClick={handleOnClick}>...
                {onClick === true ? <p>{description}</p> : null}
            </button>
        </>
}

export default MovieItem