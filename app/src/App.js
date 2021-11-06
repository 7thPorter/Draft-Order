import axios from "axios";
import { useState, useEffect } from "react";
import "./App.css";
import AddTeams from "./AddTeams.js";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to the Draft Order randomizer! Add teams to your league to
        begin.
        <div>
          <AddTeams />
          <div id="teamList">
            <p>Teams currently in your league:</p>
            <FetchTeams />
          </div>
          Ready to draft? Click here!
          <br />
          <Link to={"/draft"}>
            <button id="goButton">Draft!</button>
          </Link>
        </div>
      </header>
    </div>
  );
}

const FetchTeams = () => {
  const [players, setPlayers] = useState([]);

  const handleDelete = async (event) => {
    await axios.delete(`/api/${event.target.name}`);
    const { data: players } = await axios.get("/api");
    setPlayers(players);
  };

  useEffect(() => {
    const func = async () => {
      const { data: players } = await axios.get("/api");

      if (players) {
        setPlayers(players);
      }
    };
    func();
  }, [setPlayers]);

  return (
    <div>
      {players.map((team) => (
        <div key={team.id}>
          {team.teamName}
          <button
            id="deleteButton"
            name={team.teamName}
            onClick={handleDelete}
          ></button>
        </div>
      ))}
    </div>
  );
};

export default App;
