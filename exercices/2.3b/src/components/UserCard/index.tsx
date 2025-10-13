import "./UserCard.css";


interface UserCardProps {
    name:string;
    age:number;
}

const users:UserCardProps[] = [
    {
        name:"Alice",
        age:25,    
    },
    {
        name:"Bob",
        age:30,

    },
    {
        name:"Charlie",
        age:35
    },
]


const UserCard = () => {
    return (
        <div className="card">
            {users.map((user) => (
                <>
                    <h2>{user.name}</h2>
                    <p>Age : {user.age}</p>
                </>
            ))}
        </div>
    )
}


export default UserCard