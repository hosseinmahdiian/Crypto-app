import { useState } from "react";

import styles from "./ChartModal.module.css"

import { Convert } from "../../Services/Convert";
import { ChartComponent } from "./ChartComponent"
import { RxCross2 } from "react-icons/rx";

import { MdOutlineEuroSymbol } from "react-icons/md"
import { BiDollar } from "react-icons/bi"
import { PiCurrencyJpy } from "react-icons/pi"

const ChartModal = ({Chart ,setChart ,Currency}) => { 

    const [Type ,setType] = useState("prices")
    const temp = Chart[Type]

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

    const typeHandler = (e) => {
        if (e.target.tagName == "BUTTON"){
            const tag = e.target.innerText.toLowerCase().replace(" ","_")
            setType(tag);
        }
    }
    return (
        <div className={styles.container} >
            <span className={styles.cross} onClick={() => setChart(null)}><RxCross2 /></span>
            <div className={styles.modal} >
                <div className={styles.name}>
                    <img src={Chart.coin.image} alt="" />
                    <span>{Chart.coin.name}</span>
                </div>
                <div className={styles.graph}>
                    <ChartComponent data={Convert(temp,Type)} type={Type}/>
                </div>
                <div className={styles.button} onClick={typeHandler}>
                    <button className={Type == "prices"        ? styles.activ : null} >Prices</button>
                    <button className={Type == "market_caps"   ? styles.activ : null} >Market Caps</button>
                    <button className={Type == "total_volumes" ? styles.activ : null} >Total Volumes</button>

                </div>

                <div className={styles.details}>
                    <p>Prices: <span>{CurrencyHandler(Currency)} {Chart.coin.current_price.toLocaleString()}</span></p>
                    <p>ATH: <span>{CurrencyHandler(Currency)} {Chart.coin.ath.toLocaleString()}</span></p>
                    <p>Market Cap: <span>{} {Chart.coin.market_cap}</span></p>
                </div>
            </div>
        </div>
    );
}

export default ChartModal;


