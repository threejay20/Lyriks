import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";


const SongDetails = () => {
    const dispact =useDispatch();
    const {songid} =useParams ();
    const {activesong, isPlaying} = useSelector((state) => state.player);
    const { data: songData, isFetching: isFetchingSongDetails} = useGetSongDetailsQuery({songid});



return (

    <div className="flex flex-col">
        <DetailsHeader artistId= "" songData={songData} />


<div className="mb-10">

<h2 className="text-white text-3x1 font-bold">Lyrics:</h2>

<div className="mt-5">
{/* checking to see if there are lyrics */}
    {songData?.sections[1].type === 'LYRICS' ? 
    // print them out in a line if there are
    songData?.sections[1].text.map((line, i) => (
        <p className="text-gray-400 text-base my-1">{line}</p>

        // if no lyrics found
)) : <p className="text-gray-400 text-base my-1"> Sorry, no lyrics found!</p>}


</div>

</div>

</div>

);


};

export default SongDetails;
