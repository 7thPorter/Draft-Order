import React, { useState } from "react";

const players = [
  "Big John",
  "Brad",
  "Brian",
  "Darren",
  "Greg",
  "Bro Lo",
  "Mexican",
  "Matt",
  "Rusty",
  "Tyler",
];
let finalOrder = [];

//________
function draftOrder(players) {
  while (players.length) {
    let dieRoll = Math.ceil(Math.random() * (players.length - 1));
    finalOrder.push(players[dieRoll]);
    players.splice(dieRoll, 1);
  }

  return finalOrder;
}
draftOrder(players);
//_________

//_________
const Order = () => {
  const [clicks, setClicks] = useState(0);
  return (
    <div>
      {clicks < finalOrder.length ? (
        <button onClick={() => setClicks(clicks + 1)}>
          {clicks === 0
            ? "And the FIRST PICK in this year's draft is..."
            : clicks < finalOrder.length - 1
            ? "The next draft pick belongs to..."
            : "We don't even need to see who's got the last pick..."}
        </button>
      ) : (
        <div>
          <h1>This year's official draft order is:</h1>
          {finalOrder.map((player) => {
            return <h3 key={player}>{player}</h3>;
          })}
        </div>
      )}
      <ShowNext clicks={clicks} />
    </div>
  );
};
//_________

//_________
const ShowNext = (props) => {
  if (props.clicks === 0 || props.clicks >= finalOrder.length) {
    return <div></div>;
  } else {
    return <div>{finalOrder[props.clicks - 1]}</div>;
  }
};
//_________

export default Order;
