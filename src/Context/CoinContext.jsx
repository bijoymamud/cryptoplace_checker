import { createContext, useEffect, useState } from "react";

export const CoinContext = createContext();


const CoinContextProvider = (props) => {

    const [allCoion, setAllCoin] = useState([]);
    const [currency, setCurrency] = useState({
        name: "usd",
        symbol: "$"
    })

    const allCoins = async () => {
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-ztf6pnfKodtRXUFUzGdgUbEX'}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
}

    useEffect(() => {
        allCoins();
} , [currency])
    
    
const contextValue = {

    allCoins,
    currency,
    setCurrency
}

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;