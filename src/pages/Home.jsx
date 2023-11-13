import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = (useState = true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  });

  return isLoading ? (
    <p>En cours de isLoading</p>
  ) : (
    <div>
      {data.offers.map((offer, index) => {
        return (
          <div>
            <p>{offer.product_name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
