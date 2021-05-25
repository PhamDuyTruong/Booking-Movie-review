import React from 'react'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Home({children}) {
    return (
        <>
            <Carousel />
            {children}
        </>
    )
}
