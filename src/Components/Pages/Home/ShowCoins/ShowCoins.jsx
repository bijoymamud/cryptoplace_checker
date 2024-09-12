import React, { useContext, useState } from 'react'
import { CoinContext } from '../../../../Context/CoinContext'

function ShowCoins() {

    const { allCoin, currency } = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);
    console.log(allCoin)


    return (
        <section className='mx-auto  pb-20'>
            
            <div className="overflow-x-auto">
                
               
  <table className="table w-6/12 mx-auto">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            #
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
   
      {
                            allCoin.slice(0, 10).map((singleCoin, index) =>

                                <tr key={singleCoin.id}
                                singleCoin = {singleCoin}
                                >
        <th>
          <label>
                                            <p>{ index+1}</p>
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={singleCoin.image}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
                                        <div className="font-bold">{singleCoin.name }</div>
              
            </div>
          </div>
        </td>
        <td>
                                        <p>${ singleCoin.current_price}</p>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
        
                            )
      }
   
    </tbody>
   
  </table>
</div>



        </section>
    )
}

export default ShowCoins
