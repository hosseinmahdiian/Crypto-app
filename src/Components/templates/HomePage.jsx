import { useEffect, useState } from "react";

import Pagination from "../modules/pagination";
import TableCoin from "../modules/TableCoin";
import Search from "../modules/Search"
import ChartModal from "../modules/ChartModal";
import { Get_Coin } from "../../Services/CryptoApi";

const HomePage = () => {
    const [Coins ,setCoins] = useState([])
    const [IsLoading , setIsLoading] = useState(true)
    const [Page ,setPage] = useState(1)
    const [Currency ,setCurrency] = useState("usd")
    const [Chart, setChart] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        const fetchData = async () => {
            try{
                    const res = await fetch(Get_Coin(Page,Currency));
                    const json = await res.json();
                    setCoins(json);
                    setIsLoading(false)
            } catch(error) {
                console.log(error);
            }
        }
            fetchData();

    } , [Page,Currency])
    

    return (
        <div>
            {(!IsLoading &&(
                <Search Currency={Currency} setCurrency={setCurrency}/>
           ))}
           <TableCoin Coins={Coins} IsLoading={IsLoading} Currency={Currency} setChart={setChart}  />
           {Chart && <ChartModal Chart={Chart} setChart={setChart} Currency={Currency} />}
           {(!IsLoading &&(
                <Pagination Page={Page} setPage={setPage}/>
           ))}
        
        </div>
    );
}

export default HomePage;
