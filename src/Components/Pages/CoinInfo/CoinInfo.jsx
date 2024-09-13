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
          
          fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`, options)
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
        <section className='bg-[#0B0033] h-screen flex flex-col items-center justify-center'>
           
            <div>
                    <img  src={coinDetails.image.large} className="w-24" />
                    <h2 className='text-3xl font-extrabold pt-5 text-white'>{coinDetails.name} ({coinDetails.symbol.toUpperCase()})</h2>
            </div>
            
            <div>
                <LineChart historicalData={historicalData} />
            </div>

        </section>
    )
    } else {
        
      
        <span className="loading loading-dots loading-lg"></span>

        
    }

}

export default CoinInfo
