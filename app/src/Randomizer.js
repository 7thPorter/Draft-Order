import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Order = () => {
  const [clicks, setClicks] = useState(0);
  const [players, setPlayers] = useState([]);
  const [finalOrder, setFinalOrder] = useState([]);

  useEffect(() => {
    const func = async () => {
      const { data: players } = await axios.get("/api");

      if (players) {
        setPlayers(players);
      }
    };
    func();
  }, [setPlayers]);

  const draftOrder = (players) => {
    while (players.length) {
      let dieRoll = Math.ceil(Math.random() * (players.length - 1));
      setFinalOrder(finalOrder.push(players[dieRoll].teamName));
      players.splice(dieRoll, 1);
    }
  };
  draftOrder(players);

  return (
    <div className="Draft">
      {clicks < finalOrder.length ? (
        <button onClick={() => setClicks(clicks + 1)} id="pickButton">
          {clicks === 0
            ? "And the FIRST PICK in this year's draft is..."
            : clicks < finalOrder.length - 1
            ? "The next draft pick belongs to..."
            : "We don't even need to see who's got the last pick..."}
        </button>
      ) : (
        <div>
          <h1>This year's official draft order is:</h1>
          {Array.isArray(finalOrder) === true ? (
            finalOrder.map((player) => {
              return <h3 key={player}>{player}</h3>;
            })
          ) : (
            <div></div>
          )}
          <Link to={"/"}>
            <button id="backButton">Draft Again</button>
          </Link>
        </div>
      )}
      <ShowNext clicks={clicks} finalOrder={finalOrder} />
    </div>
  );
};
//_________

//_________
const ShowNext = (props) => {
  if (props.clicks === 0 || props.clicks >= props.finalOrder.length) {
    return <div></div>;
  } else {
    return <div>{props.finalOrder[props.clicks - 1]}</div>;
  }
};
//_________

export default Order;
