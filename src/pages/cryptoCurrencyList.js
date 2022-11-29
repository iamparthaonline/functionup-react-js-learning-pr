import React, { useState, useEffect } from "react";
import axios from "axios";
import "./crypto.css";

const crypto_api = "https://api.coincap.io/v2/assets";

const CryptoCurrencyList = () => {
  const [cryptoList, setCryptoList] = useState();
  const [activeCrypto, setActiveCrypto] = useState();

  useEffect(() => {
    if (!cryptoList) {
      // if cryptoList is not available then do api call and update it
      axios.get(crypto_api).then((response) => {
        setCryptoList(response.data.data);
      });
    }
  });

  const handleActiveCrypto = (coin) => {
    setActiveCrypto(coin);
    const detailsApiUrl = `https://api.coincap.io/v2/assets/${coin.name.toLowerCase()}/history?interval=d1`;
    axios.get(detailsApiUrl).then((response) => {
      const tempData = { ...coin };
      tempData.table = response.data.data;
      setActiveCrypto(tempData);
    });
  };

  return (
    <div>
      <h2>Crypto Currency List</h2>
      <div className="crypto-container">
        {cryptoList && cryptoList.length > 0 && (
          <ol>
            {cryptoList.map((coin, index) => (
              <li key={coin.symbol} onClick={() => handleActiveCrypto(coin)}>
                {coin.name} [ Price - {coin.priceUsd} ] |
                <a href={coin.explorer}>Details</a>
              </li>
            ))}
          </ol>
        )}
        {activeCrypto && (
          <div className="crypto-table">
            <h2>{activeCrypto.name}</h2>
            <p>
              Rank - {activeCrypto.rank} | Price - {activeCrypto.priceUsd}
            </p>
            <p>
              Symbol - <strong>{activeCrypto.symbol}</strong>
            </p>
            <ul>
              {activeCrypto.table &&
                activeCrypto.table.length > 0 &&
                activeCrypto.table.map(({ priceUsd, date, time }) => (
                  <li key={date}>
                    {date} {`-->`} {priceUsd}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default CryptoCurrencyList;
