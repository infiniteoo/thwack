import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const getBitcoinPrice = async () => {
  const response = await axios.get(
    `${BASE_URL}/simple/price?ids=bitcoin&vs_currencies=usd`
  );
  return response.data.bitcoin.usd;
};
