import "./App.css";
import RandomDog from "../src/components/RandomDog";
import { useState } from "react";

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="app-container">
      <h1 className="app-title">🐕 Random Dogs Gallery</h1>
      <div className="dogs-container">
        <RandomDog key={`dog1-${refreshKey}`} />
        <RandomDog key={`dog2-${refreshKey}`} />
        <RandomDog key={`dog3-${refreshKey}`} />
      </div>
      <button
        className="refresh-button"
        onClick={() => setRefreshKey(refreshKey + 1)}
      >
        🔄 Refresh Dogs
      </button>
    </div>
  );
}

export default App;
