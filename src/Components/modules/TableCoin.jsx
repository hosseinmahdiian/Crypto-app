import Chart_up from "../../assets/chart-up.svg"
import Chart_dwon from "../../assets/chart-down.svg"

import { HashLoader } from "react-spinners";

import styles from "./TableCoin.module.css"

const TableCoin = ({Coins ,IsLoading,Currency,setChart}) => {

    // console.log(Coins);

    return (
        <>
        <div className={styles.container}> 
           {IsLoading ?     
                <HashLoader className={styles.spinner} color="#3698d6" size={100} /> :
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>coin</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>24h</th>
                            <th>Total Valume</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Coins.map((coin) => (
                            // component table row after export devlop
                            <TableRow setChart={setChart} coin={coin} key={coin.id} Currency={Currency}/>
                        ))}
                    </tbody>
                </table>
            }
        </div>
        </>
    );
}

export default TableCoin;


//compnnent TableRow develop hear

import { MdOutlineEuroSymbol } from "react-icons/md"
import { BiDollar } from "react-icons/bi"
import { PiCurrencyJpy } from "react-icons/pi"
import { MarketChart } from "../../Services/CryptoApi";


const TableRow = ({coin , Currency, setChart}) => {

    const {
        id,
        name ,
        symbol,
        current_price,
        image,
        price_change_percentage_24h: price_change,
        total_volume
    } = coin

    const CurrencyHandler = (Currency) =>{
        if (Currency == "usd") {
            return <BiDollar/>
        } else if (Currency == "eur") {
            return <MdOutlineEuroSymbol/>
        } else if (Currency == "jpy") {
            return <PiCurrencyJpy/>
        } else {
            return null
        }
    }
    
    const showHandler = async () => {
        try {
            const res = await fetch(MarketChart(id))
            const json = await res.json()
            setChart({...json , coin})
        } catch (error) {
            console.log(error);
            
        }
    }

    return(
        <tr>
            <td >
                <div className={styles.symbol} onClick={showHandler}>
                    <img src={image} alt={name} />
                    <span>{symbol.toUpperCase()}</span>
                </div>
            </td>
            <td>{name}</td>
            <td>{CurrencyHandler(Currency)}{current_price.toLocaleString()}</td>
            <td style={price_change > 0 ? {color:"#57bc7c"}  :  {color:"#d33636" }}>{price_change.toFixed(2)}</td>
            <td>{total_volume.toLocaleString()}</td>
            <td>
                <img src={price_change > 0 ? Chart_up : Chart_dwon} alt={name} />
                </td>
        </tr>)
}