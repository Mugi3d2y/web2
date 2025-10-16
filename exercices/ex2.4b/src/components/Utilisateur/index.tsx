import "./Utilisateur.css";

interface UtilisateurProps {
    nom:string,
    age:number,
    enligne:boolean,
}


const Utilisateur = (props: UtilisateurProps) => {
    return (
        <div className="UserCard">
            <h1>{props.nom}</h1>
            <p>{props.age}</p>
            <h2 className={props.enligne ? "online" : "offline"}>{props.enligne ? "En Ligne" : "Hors Ligne"}</h2>
        </div>
    )
}

export default Utilisateur