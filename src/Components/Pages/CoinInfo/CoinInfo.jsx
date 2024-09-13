import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../../Context/CoinContext';
import LineChart from '../LineChart/LineChart';

function CoinInfo() {
    const { currency } = useContext(CoinContext);
    const { coinId } = useParams();
    const [coinDetails, setCoinDetails] = useState();
    const [historicalData, setHistoricalData] = useState();

    const getCoinDetails = async () => {
        
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-ztf6pnfKodtRXUFUzGdgUbEX'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
            .then(response => response.json())
            .then(response => setCoinDetails(response))
            .catch(err => console.error(err));
        
    }


    const getHistoricalData = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-ztf6pnfKodtRXUFUzGdgUbEX'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
            .then(response => response.json())
            .then(response => setHistoricalData(response))
            .catch(err => console.error(err));
    }



    useEffect(() => {
        getCoinDetails();
        getHistoricalData();
    } ,[currency])


    if (coinDetails && historicalData) {
        
    return (
      
        <section className='bg-[#0B0033]'>
             <div className=' flex flex-col items-center justify-center'>
           
           <div className='flex flex-col items-center py-20'>
                   <img  src={coinDetails.image.large} className="w-24" />
                   <h2 className='text-3xl font-extrabold pt-5 text-white'>{coinDetails.name} ({coinDetails.symbol.toUpperCase()})</h2>
           </div>
           
           <div className='pb-28'>
               <LineChart historicalData={historicalData} />
           </div>

            </div>
            
            <div className='md:w-5/12  mx-auto text-white pb-28 px-3'>
               <ul className=' flex justify-between border-b-2 pb-3  mx-auto border-gray-600'>
                   <li>Crypto Market Rank</li>
                   <li className='text-left'>{coinDetails.market_cap_rank}</li>
                </ul>

                <ul className=' flex justify-between border-b-2 py-3  mx-auto border-gray-600'>
                    <li>Current Price</li>
                    <li className='text-left'>{currency.symbol} {coinDetails.market_data.current_price[currency.name].toLocaleString()}</li>
                </ul>
                
                <ul className=' flex justify-between border-b-2 py-3  mx-auto border-gray-600'>
                    <li>Market Cap</li>
                    <li className='text-left'>{currency.symbol} {coinDetails.market_data.market_cap[currency.name].toLocaleString()}</li>
                </ul>

                <ul className=' flex justify-between border-b-2 py-3  mx-auto border-gray-600'>
                    <li>24 Hour High</li>
                    <li className='text-left'>{currency.symbol} {coinDetails.market_data.high_24h[currency.name].toLocaleString()}</li>
                </ul>

                <ul className=' flex justify-between border-b-2 py-3  mx-auto border-gray-600'>
                    <li>24 Hour Low</li>
                    <li className='text-left'>{currency.symbol} {coinDetails.market_data.low_24h[currency.name].toLocaleString()}</li>
                </ul>
                
           </div>
    
        </section>
    )
    } else {
        
        return (
            <section className='bg-[#0B0033] h-screen flex items-center justify-center'>
                <span className="loading loading-bars loading-lg text-white"></span>
                <span className="loading loading-bars loading-lg text-white"></span>
        </section>
        );
        
    }

}

export default CoinInfo
