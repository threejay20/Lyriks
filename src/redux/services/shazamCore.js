import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';



    export const shazamCoreApi = createApi({

        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
            // prepares the headers for us
            prepareHeaders: (headers) => {
                headers.set('X-RapidAPI-Key', '8bce454a18msh0cb432b040e3bc0p1b3355jsnbb91fd76641e');
                return headers;
            },
        }),
        // can call as hook
        endpoints: (builder) =>
         ({getTopCharts: builder.query({query: () => '/charts/world' }),
    }),

    });
    export const{
        useGetTopChartsQuery
    } = shazamCoreApi;