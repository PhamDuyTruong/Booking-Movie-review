import React from 'react';
import Carousel from '../../components/Carousel'


export default function Home({children}) {
    return (
        <>
            <Carousel />
            {children}
        </>
    )
}
