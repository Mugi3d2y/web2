import "./App.css";
import PageTitle from "../PageTitle";
import UserCard from "../UserCard";
import Footer from "../Footer";

const App = () => {
  const title = "Welcome to My App";
  const footerText = "© 2023 My App";

  return (
    <div className="font-color">
      <PageTitle title={title} />
      <UserCard/>
      <Footer title={footerText}/>
    </div>
  );
};

export default App;