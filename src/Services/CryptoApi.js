
const BASE_API = `https://api.coingecko.com/api/v3`;
const API_KEY = `CG-vVku6F2XcVZiJ538U28SpCum`;

const Get_Coin = (page,Currency) => {
    return `${BASE_API}/coins/markets?vs_currency=${Currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`
}

const Search_Coin = (query) => {
    return `${BASE_API}/search?query=${query}&x_cg_demo_api_key=${API_KEY}`
}

const MarketChart = (coin) => {
    return `${BASE_API}/coins/${coin}/market_chart?vs_currency=usd&days=7&x_cg_demo_api_key=${API_KEY}`
}
export {Get_Coin,Search_Coin,MarketChart}