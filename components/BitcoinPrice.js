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
    <div className="text-center mb-8 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-black">
        Current Bitcoin Price
      </h1>
      <p className="text-2xl text-black">
        {price ? `$${price}` : "Loading..."}
      </p>
    </div>
  );
};

export default BitcoinPrice;
