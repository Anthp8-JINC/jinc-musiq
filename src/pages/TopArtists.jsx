import React from 'react';
import axios from 'axios';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';


import { ArtistCard, Loader, Error } from '../components';

const TopArtists = () => {
    const { data, isFetching, error } = useGetTopChartsQuery();


    

    if(isFetching) return <Loader title="Loading top charts" />;

    if (error) return <Error />;

return (
    <div className="flex flex-col">
        <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Discover Top Artists </h2>
    
        <div className="flex flex-wrap sm:justify-start justify-center gap-8">
            {data?.map((track) => (
                <ArtistCard
                    key={track.key}
                    track={track}
                />
            ))}
        </div>
    </div>

    );
};

export default TopArtists;
