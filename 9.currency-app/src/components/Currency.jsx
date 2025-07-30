import React, { useState } from 'react'
import '../css/currency.css'
import { FaArrowRightLong } from "react-icons/fa6";
import axios from 'axios';

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_OwALiJN4mFohbj0Xv2CLylL6IlNSsJDmPbwMVmWQ"

function Currency() {
    const [amount, setAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('USD');
    const [toCurrency, setToCurrency] = useState('TRY');
    const [result, setResult] = useState(0);

    //button click olayı
    const exchange = async () => {
        // console.log(amount)
        // console.log(fromCurrency)
        // console.log(toCurrency)
        //burada apiye bağlanıp verileri alacağız
        const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
        const result = (response.data.data[toCurrency] * amount).toFixed(2);
        setResult(result);
    }


    return (
        <div className='currency-div'>
            <div>
                <h3 style={{ marginTop: '-20px', fontFamily: 'arial', backgroundColor: 'white', padding: '10px', borderRadius: '10px', width: '300px', textAlign: 'center' }}>
                    Döviz Kuru Uygulaması
                </h3>
            </div>
            <div>
                <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Miktar'
                    type="number" className='amount' />

                <select onChange={(e) => setFromCurrency(e.target.value)} className='from-currency-option'>
                    <option>USD</option>
                    <option>EUR</option>
                    <option>TRY</option>
                </select>
                <FaArrowRightLong style={{ fontSize: '20px', marginRight: '10px', marginTop: '5px' }} />

                <select onChange={(e) => setToCurrency(e.target.value)} className='to-currency-option'>
                    <option>TRY</option>
                    <option>USD</option>
                    <option>EUR</option>
                </select>

                <input value={result} onChange={(e => e.target.value)} type="number" className='amount' />

            </div>


            <div>
                <button onClick={exchange}
                    style={{ marginTop: '20px', padding: '10px 20px', borderRadius: '5px', backgroundColor: '#093ce4ff', color: 'white', border: 'none', cursor: 'pointer' }}>
                    Çevir
                </button>
            </div>



        </div>


    )
}

export default Currency