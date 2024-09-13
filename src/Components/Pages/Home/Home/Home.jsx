

import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../../../Context/CoinContext'

export default function Home() {
  const { allCoin,currency } = useContext(CoinContext)
    const [displayCoin, setDisplayCoin] = useState([]);
    const [input, setInput] = useState('');


    const handleInput = (event) => {
        setInput(event.target.value);
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        const coins =  await allCoin.filter((item) => {
           return item.name.toLowerCase().includes(input.toLowerCase())
        })
    }
    
    

    // load allCoin data in displayCoin

    useEffect(() => {
        setDisplayCoin(allCoin);
    },[allCoin])
 

  return (
    <div className="bg-[#0B0033] text-white min-h-screen">
      <div className="py-14 text-center w-full md:w-2/3 lg:w-1/2 mx-auto px-4">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          Largest <br />Crypto <br /> Market Place
        </h2>
        <p className="leading-tight pt-3 w-full md:w-3/4 mx-auto">
          Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.
        </p>

        <div className=" flex justify-center items-center">
                  <form
                      onSubmit={handleSearch}
                      className="flex items-center bg-white rounded-md  shadow-lg overflow-hidden max-w-lg w-full my-10">
        
                   <input
                          onChange={handleInput}
                          type="text"
                          placeholder="Search crypto..."
                          required
                          value={input}
                          className="px-4 py-3 w-full text-gray-600 focus:outline-none"/>

      
                        <button
                            type='submit'
                            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-10 mr-1 rounded-md focus:outline-none">
                          Search
                        </button>
                        
                    </form>
            </div>
      </div>

      
          
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
                            displayCoin.slice(0, 10).map((singleCoin, index) =>
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

    </div>
  )
}


// import React, { useContext, useState } from 'react'
// import { CoinContext } from '../../../../Context/CoinContext'

// export default function Home() {
//   const { allCoin, currency } = useContext(CoinContext)
//   const [searchQuery, setSearchQuery] = useState('')

//   // Filter coins based on search query
//   const filteredCoins = searchQuery
//     ? allCoin.filter(coin =>
//         coin.name.toLowerCase().startsWith(searchQuery.toLowerCase().slice(0, 3))
//       )
//     : allCoin.slice(0, 10) // Show only 10 coins if there's no search query

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value)
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // You can add additional search actions here if needed
//   }

//   return (
//     <div className="bg-[#0B0033] text-white min-h-screen">
//       <div className="py-14 text-center w-full md:w-2/3 lg:w-1/2 mx-auto px-4">
//         <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
//           Largest <br />Crypto <br /> Market Place
//         </h2>
//         <p className="leading-tight pt-3 w-full md:w-3/4 mx-auto">
//           Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.
//         </p>

//         <div className=" flex justify-center items-center">
//           <form onSubmit={handleSubmit} className="flex items-center bg-white rounded-md shadow-lg overflow-hidden max-w-lg w-full my-10">
//             <input
//               type="text"
//               placeholder="Search crypto.."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               required
//               className="px-4 py-3 w-full text-gray-600 focus:outline-none"
//             />
//             <button
//               type='submit'
//               className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-10 mr-1 rounded-md focus:outline-none"
//             >
//               Search
//             </button>
//           </form>
//         </div>
//       </div>

//       <section className='mx-auto pb-20'>
//         <div className="overflow-x-auto">
//           <table className="table w-6/12 mx-auto bg-[#0b004e] table-fixed">
//             <thead>
//               <tr>
//                 <th className='w-[80px]'>
//                   <label className='text-white'>
//                     Rank
//                   </label>
//                 </th>
//                 <th className='text-white w-[200px]'>Name</th>
//                 <th className='text-white w-[170px]'>Price</th>
//                 <th className='text-white w-[150px]'>24h Change</th>
//                 <th className='text-white w-[200px]'>Market Cap</th>
//               </tr>
//             </thead>
//             <tbody>
//               {
//                 filteredCoins.map((singleCoin) => (
//                   <tr key={singleCoin.id}>
//                     <td>
//                       <label>
//                         <p>{singleCoin.market_cap_rank}</p>
//                       </label>
//                     </td>
//                     <td>
//                       <div className="flex items-center gap-3">
//                         <div className="avatar">
//                           <div className="mask mask-squircle h-12 w-12">
//                             <img
//                               src={singleCoin.image}
//                               alt={singleCoin.name}
//                             />
//                           </div>
//                         </div>
//                         <div className="truncate">
//                           <div className="font-bold">
//                             {singleCoin.name} - {singleCoin.symbol}
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                     <td>
//                       <p>{currency.symbol} {singleCoin.current_price.toLocaleString()}</p>
//                     </td>
//                     <td>
//                       <p className={singleCoin.price_change_percentage_24h >= 0
//                         ? 'text-green-500'
//                         : 'text-red-500'}>
//                         {Math.floor(singleCoin.price_change_percentage_24h * 100) / 100}%
//                       </p>
//                     </td>
//                     <td>
//                       <p>{currency.symbol} {singleCoin.market_cap.toLocaleString()}</p>
//                     </td>
//                   </tr>
//                 ))
//               }
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </div>
//   )
// }
