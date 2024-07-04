import { useNavigate } from "react-router-dom";
import { useGetPlayerQuery, useDeletePlayerMutation } from "../API/puppybowlapi";


function singlePlayer(){
    const [deletePlayer] = useDeletePlayerMutation;
    const { data = {}, error, isLoading} = useGetPlayerQuery(playerId);

    const handleDelete = async (id) => {
        await deletePlayer(id)
      
        navigate('/players', {preventScrollReset: false})
       }
        if (isLoading) {
          return <section><p>Player is loading...</p></section>
        }
        if (error) {
          return <section><p>Something went wrong! Please try again!</p></section>
        }
    const player = data?.data?.player;
    return(
        <section>
            <div>
                <h1>Name: {player.name}</h1>
                <img src={player.imgUrl} />
                <h3>Breed: {player.breed}</h3>
                <div>
                    <p>Status: {player.status}</p>
                    <p>Score: {player?.team?.score || 0}</p>
                </div>
            </div>
            <button onClick={() => handleDelete(player.id)}>Remove</button>
            <button onClick={useNavigate(`/players`)}>Return</button>
        </section>
    )
}
export default singlePlayer;