import './App.css';
import Utilisateur from '../Utilisateur';

function App() {

  return (
    <div className="user-container">
      <Utilisateur nom="Alice" age={25} enligne={false}/>
      <Utilisateur nom="Bob" age={30} enligne={true}/>
      <Utilisateur nom="Charlie" age={22} enligne={false}/>
    </div>
  )
}

export default App
