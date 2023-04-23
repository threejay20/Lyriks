import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";


import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";


const ArtistDetails = () => {
    
    const { id: artistId } =useParams ();
    const {activeSong, isPlaying} = useSelector((state) => state.player);
    const { data: artistData, isFetching: isFetchingArtistDetails, error} = useGetArtistDetailsQuery({artistId});
    

   if(isFetchingArtistDetails) return
    <Loader title="Loading artist details" />;

    if(error) return <Error/>



return (

    <div className="flex flex-col">
        <DetailsHeader 
        artistId= {artistId} 
        artistData={artistData} 
        />

{/* Related songs section */}
<RelatedSongs
    data={Object.values(artistData?.song)}
    artistId={artistId}
    isPlaying={isPlaying}
    activesong={activeSong}
    


/>

</div>

);


};

export default ArtistDetails;
