import axios from "axios";
import React, { useState } from "react";

const AddTeams = () => {
  const [team, setTeam] = useState("");

  const handleSubmit = async () => {
    await axios.post("/api", {
      name: team,
    });
    setTeam("");
  };

  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  return (
    <div id="addTeams">
      <form onSubmit={handleSubmit}>
        <label htmlFor="teamName">Add a team to your league: </label>
        <input name="name" onChange={handleChange} value={team}></input>
        <button type="submit" className="submit-button" id="addButton">
          Add Team
        </button>
      </form>
    </div>
  );
};

export default AddTeams;
