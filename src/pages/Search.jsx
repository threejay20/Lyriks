

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {Error, Loader, SongCard} from '../components';
import React from 'react';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Search = () =>{


const {activeSong, isPlaying} = useSelector ((state) => state.player);
const {data, isFetching, error } = useGetTopChartsQuery ();



if(isFetching) return <Loader title="Loading top charts"/>;

if (error && country) return <Error/>

return (
    <div className="flex flex-col">
        <h2 className="font-bold text-3x1 text-white text-left mt-4 mb-10">Discover Top Charts
        </h2>

        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data?.map((song, i) => (
                <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
                />
            ))}
        </div>

export default Search;
