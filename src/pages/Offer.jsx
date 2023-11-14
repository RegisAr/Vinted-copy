import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// const Offer = () => {
//   return <h2>Ceci est ma page Offer</h2>;
// };

const Offer = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return isLoading ? (
    <p>En cours de isLoading</p>
  ) : (
    <body className="bodyOffer">
      <img src={data.product_image.secure_url} alt="" />
      <p>{data.product_price} €</p>
      {data.product_details.map((details) => {
        const clefs = Object.keys(details);
        const clef = clefs[0];
        return (
          <p key={clef}>
            {clef} : {details[clef]}
          </p>
        );
      })}
    </body>
  );
};

export default Offer;
