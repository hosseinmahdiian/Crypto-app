import { useEffect, useState } from "react";
import { Search_Coin } from "../../Services/CryptoApi";
import { HashLoader } from "react-spinners";

import styles from "./Search.module.css"

const Search = ({Currency,setCurrency}) => {
    const [Text,setText] = useState("")
    const [Coins,setCoins] = useState([])
    const [IsLoading , setIaLoading] = useState(true)


    useEffect(() => {
        const Contrller = new AbortController() 

        if (!Text){
            setCoins([])
            setIaLoading(false)
            return
        }

        const SearchCoin = async () => {
                try{
                    const res = await fetch(Search_Coin(Text),{signal:Contrller.signal,})
                    const json = await res.json()
                    setCoins(json.coins)
                    setIaLoading(false)

                } catch(error){
                    console.log(error);
                }
        }
        SearchCoin()

        return  () => {
            Contrller.abort()
            setIaLoading(true)
        }
    },[Text])
    

    return (
        <div className={styles.searchBox}>
            <input type="text" placeholder="Search Coin" onChange={(e) => setText(e.target.value)} />

            <select 
             value={Currency} 
             onChange={(e) => setCurrency(e.target.value)}
            >
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>

            {(!!Coins.length || IsLoading) && 
                <div className={styles.result}>
                    {IsLoading ? <div><HashLoader color="#3698d6" size={40} /></div>  :
                        <ul>
                            {Coins.map((coin) => (
                                
                                <li key={coin.id} >
                                    <img src={coin.thumb} alt={coin.name} />
                                    <p>{coin.name}</p>
                                </li>
                                
                            ))}
                        </ul>
                    }
                </div>}

        </div>
    );
}

export default Search;
