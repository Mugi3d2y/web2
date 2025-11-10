import { Link, Outlet, useMatch ,useNavigate } from "react-router-dom";
import type { User } from "../types.ts";
import "./App.css";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <button onClick={() => navigate("/")}>🏠 Home</button>
      <button onClick={() => navigate("/about")}>👥 About</button>
      <button onClick={() => navigate("/contact")}>📧 Contact</button>
    </nav>
  )
};

const HomePage = () => <p>🎉 Bienvenue sur ma page de routing !</p>;
const AboutPage = () => (
  <div>
    <h1>✨ À Propos</h1>
    <h2>👨‍💻 Nos Auteurs :</h2>
    {users.map((user) => (
      <Link key={user.id} to={`/users/${user.id}`}>
        {user.name}
      </Link>
    ))}
  </div>
);
const ContactPage = () => <p>📬 Contactez-nous pour plus d'informations !</p>;

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "123-456-7890",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "234-567-8901",
  },
  {
    id: 3,
    name: "James Brown",
    email: "james.brown@example.com",
    phone: "345-678-9012",
  },
];

const UserPage = () => {
  
  const match = useMatch("/users/:userId");
  const userId = match?.params.userId;
  if (!userId) return <p>❌ Utilisateur non trouvé</p>;

  const user = users.find((u) => u.id.toString() === userId);
  if (!user) return <p>❌ Utilisateur non trouvé</p>;
  return (
    <div>
      <h2>👤 {user.name}</h2>
      <p><strong>📧 Email:</strong> {user.email}</p>
      <p><strong>📱 Téléphone:</strong> {user.phone}</p>
    </div>
  )
}

const App = () => {
  return <div>
    <NavBar/>
    <Outlet/>
  </div>
};

export default App;
export { HomePage, AboutPage, ContactPage, UserPage };
