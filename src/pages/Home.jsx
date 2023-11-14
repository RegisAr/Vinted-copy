import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {}
    };
    fetchData();
  });

  return isLoading ? (
    <p>En cours de isLoading</p>
  ): (
    <body className="bodyHome">
      <div>
        {data.offers.map((offer) => {
          const avatar = offer.owner.account.avatar?.secure_url})

          if (avatar === undefined) {
            <div>{
              return ( <p>{offer.owner.account.username} n'a pas de photo</p>
              <Link key={offer._id} to={`/offer/${offer._id}`}>
                <p>{offer.owner.account.username}</p>
                <img src={offer.product_image.secure_url} alt="clothe" />

                <p>{offer.product_price} €</p>
                <p>{offer.product_details[1].TAILLE}</p>
                <p>{offer.product_details[0].MARQUE}</p>
              </Link>
          )}
              </div>
          }
          if (avatar !== undefined) {
            <div> 
             {return(
              <p>{offer.owner.account.username} a pas de photo</p>
              <Link key={offer._id} to={`/offer/${offer._id}`}>
                <p>{offer.owner.account.username}</p>
                <img
                  src={offer.owner.account.avatar.secure_url}
                  alt="owner picture"
                />
                <img src={offer.product_image.secure_url} alt="clothe" />

                <p>{offer.product_price} €</p>
                <p>{offer.product_details[1].TAILLE}</p>
                <p>{offer.product_details[0].MARQUE}</p>
              </Link>
              ) }</div>
             
              
          }
        
        )}
      </div>
    </body>
  );
};

export default Home;
