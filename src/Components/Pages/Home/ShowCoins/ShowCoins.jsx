import React, { useContext } from 'react'
import { CoinContext } from '../../../../Context/CoinContext'

function ShowCoins({coins}) {


    const { allCoin, currency } = useContext(CoinContext);

    return (
        <section className='mx-auto pb-20'>
            <div className="overflow-x-auto">
                <table className="table w-6/12 mx-auto bg-[#0b004e] table-fixed">
                    <thead>
                        <tr>
                            <th className='w-[80px]'>
                                <label className='text-white'>
                                    Rank
                                </label>
                            </th>
                            <th className='text-white w-[200px]'>Name</th>
                            <th className='text-white w-[170px]'>Price</th>
                            <th className='text-white w-[150px]'>24h Change</th>
                            <th className='text-white w-[200px]'>Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allCoin.slice(0, 10).map((singleCoin) =>
                                <tr key={singleCoin.id}>
                                    <td>
                                        <label>
                                            <p>{singleCoin.market_cap_rank}</p>
                                        </label>
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={singleCoin.image}
                                                        alt={singleCoin.name} />
                                                </div>
                                            </div>
                                            <div className="truncate">
                                                <div className="font-bold">
                                                    {singleCoin.name} - {singleCoin.symbol}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{currency.symbol} {singleCoin.current_price.toLocaleString()}</p>
                                    </td>
                                    <td>
                                        <p className={singleCoin.price_change_percentage_24h >= 0
                                            ? 'text-green-500'
                                            : 'text-red-500'}>
                                            {Math.floor(singleCoin.price_change_percentage_24h * 100) / 100}%
                                        </p>
                                    </td>
                                    <td>
                                        <p>{currency.symbol} {singleCoin.market_cap.toLocaleString()}</p>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default ShowCoins;



