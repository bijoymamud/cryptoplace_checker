import React from 'react'
import Footer from '../../Footer/Footer'

function Home() {
    return (
        <div className='h-screen bg-[#0B0033] text-white'>

            <div className='py-20 text-center w-1/3 mx-auto'>
                <h2 className='text-7xl font-bold leading-tight'>Largerst <br />Crypto <br /> Market Place</h2>
                <p className='leading-tight pt-3 w-3/4 mx-auto'>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>

                <div className=" flex justify-center items-center">
                    <div className="flex items-center bg-white rounded-md  shadow-lg overflow-hidden max-w-lg w-full my-10">
        {/* Search Input */}
                      <input
                          type="text"
                          placeholder="Search crypto.."
                          className="px-4 py-4 w-full text-gray-600 focus:outline-none"/>

        {/* Search Button */}
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-10 mr-2 rounded-md focus:outline-none">
                          Search
                        </button>
                        
                    </div>
            </div>
            </div>
           
    </div>
    )
}

export default Home
