import React from 'react'
import { useParams } from 'react-router-dom'

function CoinInfo() {

    const { coinId } = useParams();
    console.log(coinId)


    return (
        <section className='bg-[#0B0033] h-screen flex flex-col items-center'>
            <h2>Coin: { coinId}</h2>
            <h2></h2>
        </section>
    )
}

export default CoinInfo
