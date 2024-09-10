import axios from "axios";

export const getBitcoinData = async () =>
  axios.get("https://www.okx.com/api/v5/market/tickers");
