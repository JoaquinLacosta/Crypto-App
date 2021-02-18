import React, { useState, useEffect } from 'react'
import axios from "axios"
import Coin from "./Coin"
import "./styles/CoinList.scss"

const CoinList = () => {
    const [coins, setCoins] = useState([])
    const [search, setSearch] = useState("")
    useEffect(() => {
        axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h")
        .then(data => {
            console.log(data)
            if(data.status === 200) {
                setCoins(data.data)
            }
            else {
               console.log("Error al llamar a la api, intente mas tarde") 
            }
        })
    }, [])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    const filteredCoins = coins.filter(coin => {
        return coin.name.toLowerCase().includes(search.toLowerCase())
    })


    return (
        <div className="Coins">
            <input type="text" onChange={handleChange} placeholder="Buscar moneda"/>
            {filteredCoins.map(coin => (
                <Coin key={coin.id} {...coin} />
            ))}
        </div>
    )
}

export default CoinList
