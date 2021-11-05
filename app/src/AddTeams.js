import axios from "axios";
import React, { useState } from "react";

const AddTeams = () => {
  const [team, setTeam] = useState("");
  const handleSubmit = async (form) => {
    await axios.post("/api", {
      name: form.teamName,
    });
    setTeam("");
  };
  const handleChange = (event) => {
    setTeam(event.target.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="teamName">Add a team to your league: </label>
        <input name="teamName" onChange={handleChange} value={team}></input>
        <button type="submit" className="submit-button">
          Add Team
        </button>
      </form>
    </div>
  );
};

export default AddTeams;
