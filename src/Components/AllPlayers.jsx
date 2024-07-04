import { useState } from "react";
import { useGetPlayersQuery } from "../API/puppybowlapi";
import "../index.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
import AddPlayer from "./NewPlayerForm";
// Define a new React component
const Players = () => {
  const { data = {}, error, isLoading } = useGetPlayersQuery();
  const [searchParameter,setSearchParameter]= useState("");
  const navigate = useNavigate;
  if (isLoading) {
    return <p>Loading Puppies...</p>
  };
  if (error) {
    return <p>Something went wrong! Please try again!</p>
    
  };

const displayPlayers = searchParameter && data
  ? data.data.players.filter((player) =>
    player.name.toLowerCase().includes(searchParameter.toLowerCase())
      )
    : data.data.players;
   console.log(Players)
  return (
      <section>
           <h1>Welcome to the Puppy Bowl Event!</h1>
           <h3>Get ready to meet the talented puppies in this years Puppy Bowl!</h3>
        <SearchBar className="searchBar"
          searchParameter={searchParameter}
          setSearchParameter={setSearchParameter}
        />
        <AddPlayer />
        {isLoading && <p>{message}</p>}
        {error && <p>{message}</p>}
        {displayPlayers &&
          displayPlayers.map((player) => (
          <div key={player.id} className="player-card">
          <img className="player-image" src={player.imageUrl} alt={player.name}/>
          <div className="player-details">
            <h2>  Name: {player.name} </h2> 
            <p>  Breed: {player.breed} </p> 
            <p> Status: {player.status} </p>
            <button key={player.name} onClick={()=> navigate(`/players/${player.id}`)} >View</button>
          </div>
          </div>
 ))}
 </section>
  )
}         

export default Players;