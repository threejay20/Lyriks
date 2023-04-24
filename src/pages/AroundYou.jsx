import {useState, useEffect} from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import {Error, Loader, SongCard} from '../components';
import React from 'react';

const AroundYou = () =>{

const [country, setCountry] = useState('');
const [loading, setLoading] = useState(true);
const {activeSong, isPlaying} = useSelector ((state) => state.player);

return (
    <div>

    </div>
)
}

const CountryTracks = () => <div>CountryTracks</div>;

export default CountryTracks;
