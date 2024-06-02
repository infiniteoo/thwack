import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPrice } from "../store";
import { getBitcoinPrice } from "../services/bitcoin";

const BitcoinPrice = () => {
  const dispatch = useDispatch();
  const price = useSelector((state) => state.bitcoin.price);

  useEffect(() => {
    const fetchPrice = async () => {
      const price = await getBitcoinPrice();
      dispatch(setPrice(price));
    };

    fetchPrice();
  }, [dispatch]);

  return (
    <div>
      <h1>Bitcoin Price</h1>
      <p>{price ? `$${price}` : "Loading..."}</p>
    </div>
  );
};

export default BitcoinPrice;
