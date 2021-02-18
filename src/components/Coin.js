import React from 'react'
import "./styles/Coin.scss"

const Coin = ({ image, name, market_cap_change_percentage_24h, current_price }) => {
    return (
        <div className="Coin__container">
            <div className="Coin__container-type">
                <img src={image} alt={`${name} image`}/>
                <p>{name}</p>
            </div>
            <div className="Coin__container-price">
                <h4>Price</h4>
                <p>$ {current_price.toFixed(2)}</p>
            </div>
            <div className="Coin__container-cap">
                <h4>24hs cap</h4>
                <p className={market_cap_change_percentage_24h > 0 ? "green" : "red"} >{market_cap_change_percentage_24h.toFixed(2)}%</p>
            </div>
        </div>
    )
}

export default Coin
