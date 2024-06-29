import React from "react";
import { useGetPlayerQuery, useUpdatePlayersMutation } from "../API/puppyBowlApi";
import "../index.css";

// Define a new React component
const Players = () => {
  const { data = {}, error, isLoading } = useGetPlayerQuery();

  // Show a loading message while data is being fetched
  if (isLoading) {
    return <p>Loading Puppies...</p>
  };
  if (error) {
    return <p>Something went wrong! Please try again!</p>,
    console.log(error),
  };

  // Show the fetched data after it has arrived
  return (
    <div className="players">
      <h1>Welcome to the Puppy Bowl Event!</h1>
      <h3>Get ready to meet the talented puppies in this years Puppy Bowl!</h3>
      {data.data.players.map((player) => (
        <div key={player.id} className="player-card">
          {player.id.imageUrl}
          {player.id.name}
          <div className="player-details">
            
            <h2>  {player.id.name} </h2> 
            
            <p>  {player.id.breed} </p> 
            
            <p> {player.id.status} </p>
          </div>
        </div>
      ))}
    </div>
  );
};

